const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// GET /host/id
// Returns events hosted by id
router.get("/", rejectUnauthenticated, (req, res) => {
  const sqlText = `
    select date_time, events.id as event_id, boardgame.id as game_id, "name" as boardgame_name
    from events 
    join "user" on events.host_id = "user".id
    join boardgame on events.game_id = boardgame.id
    where "user".id = $1;
        `;
  pool
    .query(sqlText, [req.user.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
