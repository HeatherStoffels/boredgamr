const myEventsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_MY_EVENTS_SUCCESSFUL":
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
