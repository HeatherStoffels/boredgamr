const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  const sqlText = `SELECT event_id FROM user_events WHERE user_id = 1 `;
  pool
    .query(sqlText)
    .then((response) => {
      res.status(200).send(response.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  let query = `INSERT INTO user_events ("user_id", "event_id") VALUES ($1, $2) returning *`;
  let values = [req.body.user, req.body.event];
  pool
    .query(query, values)
    .then(({rows}) => {
      res.status(200).send(rows[0]);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
