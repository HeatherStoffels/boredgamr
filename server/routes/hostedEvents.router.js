const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/:id", (req, res) => {
  const sqlText = `
    select date_time, events.id as event_id, "name" as boardgame_name
    from events 
    join "user" on events.host_id = "user".id
    join boardgame on events.game_id = boardgame.id
    where "user".id = $1;
        `;
  pool
    .query(sqlText, [req.params.id])
    .then((response) => {
      console.log(response);

      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
