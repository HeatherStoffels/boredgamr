const hostedEventsReducer = (state = [], action) => {
    switch (action.type) {
      case "GET_ALL_HOSTED_EVENTS_SUCCESSFUL":  
        return action.payload;
        case "GET_ALL_HOSTED_EVENTS_FAILED":
        return {...state, errors: action.payload};
      default:
        return state;
    }
  };


  export default hostedEventsReducer;