const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET /details/id
// Returns details for event with id
router.get("/:id", (req, res) => {
  const sqlText = `
    select events.id as event_id, name as game_name, link, picture, player as number_of_players, events.date_time 
    from boardgame 
    join events on events.game_id = boardgame.id
    where events.id = $1;
        `;
  pool
    .query(sqlText, [req.params.id])
    .then((response) => {
      res.send(response.rows[0]);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
