const gameReducer = (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_GAME_BY_ID_SUCCESSFUL':
        return action.payload;
    case 'FETCH_GAME_BY_ID_FAILED':
        return state;
      default:
        return state;
    }
  };


  export default gameReducer;