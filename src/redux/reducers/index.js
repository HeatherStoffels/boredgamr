import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import events from './eventsReducer';
import gameDetails from './gameDetailsReducer';
import allBoardgames from './allBoardgamesReducer';
import myEvents from './myEventsReducer';
import eventDetails from './eventDetailsReducer';
import hostedEvents from './hostedEventsReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  events,// will have an id attached to either hosting or attending
  gameDetails, // will have a game_name stored in DB
  allBoardgames, // will call for all boardgames in DB
  myEvents, // will call for all events user is attending
  eventDetails, // will call for specific event info
  hostedEvents, // will get all events hosted for a user. 
});

export default rootReducer;
