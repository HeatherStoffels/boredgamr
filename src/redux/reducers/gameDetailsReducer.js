const gameReducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_GAME_BY_ID_SUCCESSFUL':
        return action.payload;
    case 'GET_GAME_BY_ID_FAILED':
        return {...state, error: action.payload};
      default:
        return state;
    }
  };


  export default gameReducer;