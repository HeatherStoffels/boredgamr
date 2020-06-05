const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET /events
// Returns all events
router.get("/", (req, res) => {
  const sqlText = `
            SELECT "user"."id" as user_id, username, events.id as events_id, date_time, picture, boardgame.id as game_id, name, player
            FROM "user"
            JOIN events on events.host_id = "user"."id"
            JOIN boardgame on boardgame.id = events.game_id
            ORDER BY date_time ASC;
        `;
  pool
    .query(sqlText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.status(500).send(error);
    });
});

// DELETE /events/id
// Deletes the event with id
router.delete("/:id", (req, res) => {
  const sqlText = `delete from events where id = $1;`;
  pool
    .query(sqlText, [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

// PUT /events/id
// Body: {date_time: [date_time string], game_id: [game id]}
router.put("/:id", (req, res) => {
  const { date_time, game_id } = req.body;
  const sqlText = `update events set date_time = $2, game_id = $3
    where events.id = $1 ;`;
  pool
    .query(sqlText, [req.params.id, date_time, game_id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

module.exports = router;
