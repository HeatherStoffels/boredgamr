import React, { Component } from "react";
import { connect } from "react-redux";


class Details extends Component {

    
  render() {
   
    return (
      <div>
        <h1>Details Page</h1>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
      events: state.events,
      boardgame: state.boardgame,
    };
  };
  
  // this allows us to use <App /> in index.js
  export default connect(mapStateToProps)(Details);
