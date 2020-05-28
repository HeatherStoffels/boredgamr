const gameReducer = (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_GAME_BY_ID':
        return action.payload;
      default:
        return state;
    }
  };


  export default gameReducer;