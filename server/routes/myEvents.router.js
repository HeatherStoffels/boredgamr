const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET /myevents
// Returns all events for user id
router.get("/", (req, res) => {
  const sqlText = `select events.id, boardgame.name as game_name, date_time, "user".username as host_name
  from events
  join "user" on events.host_id = "user".id
  join boardgame on events.game_id = boardgame.id
  join user_events on events.id = user_events.event_id
  where user_events.user_id = $1;`;
  const body = [req.user.id];
  pool
    .query(sqlText, body)
    .then(({ rows }) => {
      res.status(200).send(rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

// POST /myevents
// Body: {user: [user id], event: [event id]}
router.post("/", (req, res) => {
  const query = `INSERT INTO user_events ("user_id", "event_id") VALUES ($1, $2)`;
  const body = [req.body.user, req.body.event];
  pool
    .query(query, body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) =>{
    const sqlText = `delete from user_events where user_id = $1 and event_id = $2;`;
    pool
      .query(sqlText, [req.user.id, req.params.id])
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        res.status(500).send(error);
      });

});

module.exports = router;
