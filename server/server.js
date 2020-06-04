
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');


// Route includes
const userRouter = require('./routes/user.router');
const eventsRouter = require('./routes/events.router');
const newEventRouter = require('./routes/newEvent.router');
const gameRouter = require('./routes/game.router');
const allGamesRouter = require('./routes/allGames.router');
const myEventsRouter = require('./routes/myEvents.router');
const detailsRouter = require('./routes/details.router');
const hostedEventsRouter = require('./routes/hostedEvents.router');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/events', eventsRouter);
app.use('/create', newEventRouter);
app.use('/game', gameRouter);
app.use('/allgames', allGamesRouter);
app.use('/myevents', myEventsRouter);
app.use('/details', detailsRouter);
app.use('/host', hostedEventsRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
// sendgrid
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: 'umdstarlet@gmail.com',
//   from: 'dane@primeacademy.io',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg)
// .then()
// .catch((error) =>{
//     console.log(error, "sendgrid key",process.env.SENDGRID_API_KEY )
// });