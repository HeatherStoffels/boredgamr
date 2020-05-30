const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  const sqlText = `
            SELECT "user"."id" as user_id, username, events.id as events_id, date_time, boardgame.id as game_id, name, player
            FROM "user"
            JOIN events on events.host_id = "user"."id"
            JOIN boardgame on boardgame.id = events.game_id;
        `;
  pool
    .query(sqlText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
