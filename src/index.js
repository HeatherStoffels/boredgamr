import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./redux/reducers"; // imports ./redux/reducers/index.js
import rootSaga from "./redux/sagas"; // imports ./redux/sagas/index.js

import App from "./components/App/App";

const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList =
  process.env.NODE_ENV === "development"
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];

const initialState = {
  user: [
    {
      id: 1,
      name: "Oliver",
    
    },
    {
      id: 2,
      name: "Rachel",
    },
  ],
  events: [
    {
      id: 1,
      boardGamePlaying: 1,
      attending: [
        {
          id: 1,
          isApproved: true,
        },
        {
          id: 2,
          isApproved: false,
        },
      ],
      address: "10 W 10th",
      date: "2020-05-30",
      host: 1,
    },
  ],
};

const store = createStore(
  // tells the saga middleware to use the rootReducer
  // rootSaga contains all of our other reducers
  rootReducer,
  initialState,
  // adds all middleware to our project including saga and logger

  applyMiddleware(...middlewareList)
);

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-root")
);
