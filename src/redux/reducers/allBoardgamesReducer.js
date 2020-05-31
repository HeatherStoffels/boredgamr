const allBoardgamesReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_GAMES_SUCCESSFUL":
    case "GET_ALL_GAMES_FAILED":
      return action.payload;
    default:
      return state;
  }
};

export default allBoardgamesReducer;
