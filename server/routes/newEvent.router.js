const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// POST /create
// Body: {host_id: [host id], game_id: [game id], date_time: [date_time string]}
router.post("/",  (req, res) => {
  console.log("request received in event get");
  let query = `INSERT INTO events ("host_id", "game_id", "date_time") VALUES ($1, $2, $3)`;
  let values = [req.body.host_id, req.body.game_id, req.body.date_time];
  pool
    .query(query, values)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
