const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


    router.get('/', (req, res) => {
        const sqlText = `SELECT event_id FROM user_events WHERE user_id = 1 `;
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