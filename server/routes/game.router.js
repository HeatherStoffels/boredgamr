const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET /game/id
// Returns game details by id
router.get("/:id", (req, res) => {
  const sqlText = `SELECT * FROM "boardgame" WHERE id = $1 `;
  pool
    .query(sqlText, [req.params.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
