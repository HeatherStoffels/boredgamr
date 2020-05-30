
const myEventsReducer = (state = [], action) => {
    switch (action.type) {
      case "FETCH_MY_EVENTS":
          console.log('the action is', action)
        return action.payload;
      default:
        return state;
    }
  };


  export default myEventsReducer;