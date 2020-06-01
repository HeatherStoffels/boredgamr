const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_EVENTS_SUCCESSFUL":
      return action.payload;
    case "DELETE_EVENT_BY_ID_SUCCESSFUL":
      return [
        ...state.filter((event) => {
          return event.events_id !== action.payload;
        }),
      ];
      case"UPDATE_EVENT_BY_ID_SUCCESSFUL":
      return action.payload;
    case "GET_EVENTS_FAILED":
    case "DELETE_EVENT_BY_ID_FAILED":
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};

export default eventsReducer;
