const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const sgMail = require("@sendgrid/mail");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// POST /create
// Body: {host_id: [host id], game_id: [game id], date_time: [date_time string]}
router.post("/", rejectUnauthenticated, (req, res) => {
  const hasEnvVariables =
    process.env.SENDGRID_API_KEY && process.env.SENDGRID_FROM_EMAIL;
  if (req.user && req.user.email && hasEnvVariables) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: req.user.email,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: "Boredgamr Event",
      text: "Thanks for creating an event! ",
      html: "<strong>More details to follow.</strong>",
    };

    sgMail.send(msg);
  }

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
