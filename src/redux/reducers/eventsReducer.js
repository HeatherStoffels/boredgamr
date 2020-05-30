const eventsReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_EVENTS_SUCCESSFUL':  
        return action.payload;
        case 'GET_EVENTS_FAILED':
        return {...state, errors: action.payload};
      default:
        return state;
    }
  };


  export default eventsReducer;
  