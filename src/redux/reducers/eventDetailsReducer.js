const eventDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_EVENT_BY_ID_SUCCESSFUL':  
        return action.payload;
      case "UPDATE_EVENT_BY_ID_SUCCESSFUL":
          return {};
        case 'GET_EVENT_BY_ID_FAILED':
        return {...state, errors: action.payload};
      default:
        return state;
    }
  };


  export default eventDetailsReducer;