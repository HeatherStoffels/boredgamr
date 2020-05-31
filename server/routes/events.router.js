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

router.delete("/:id", (req, res)=>{
    const sqlText = `delete from events where id = $1;`;
    pool.query(sqlText,[req.params.id]).then(()=>{
        res.sendStatus(200);
    }).catch((error)=>{
        res.sendStatus(500);
    })
})
router.put("/:id", (req, res)=>{
    const {date_time, game_id} = req.body
    const sqlText = `update events set date_time = $2, game_id = $3
    where events.id = $1 ;`;
    pool.query(sqlText,[req.params.id, date_time, game_id]).then(()=>{
        res.sendStatus(200);
    }).catch((error)=>{
        res.sendStatus(500);
    })
})

module.exports = router;
