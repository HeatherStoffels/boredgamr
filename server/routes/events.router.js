const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


    router.get('/', (req, res) => {
        console.log("request received in events get");
        const sqlText = `SELECT * FROM "events"`;
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