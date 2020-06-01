const myEventsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MY_EVENTS":
      console.log("the action is", action);
      return action.payload;
    case "JOIN_EVENT_WITH_ID_SUCCESSFUL":
      return [...state, action.payload];
    case "JOIN_EVENT_WITH_ID_FAILED":
    case "GET_MY_EVENTS_FAILED":
      return action.payload;
    default:
      return state;
  }
};

export default myEventsReducer;
