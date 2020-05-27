const newEventReducer = (state = [], action) => {
    switch (action.type) {
      case 'CREATE_EVENT':
        return action.payload;
      default:
        return state;
    }
  };


  export default newEventReducer;