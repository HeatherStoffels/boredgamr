
const allGamesReducer = (state = [], action) => {
    console.log(state);
    switch (action.type) {
      case "FETCH_ALL_GAMES_BY_ID":
        return action.payload;
      default:
        return state;
    }
  };


  export default allGamesReducer;