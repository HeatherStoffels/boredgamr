import React, { Component } from "react";
import { connect } from "react-redux";

class MyEventsList extends Component {

    componentDidMount(){
        this.props.dispatch({type: "GET_MY_EVENTS"});
    }

  render() {
    return (
      <div>
        <h2>My Event List</h2>
        <ul>
      
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  events: state.events,
});

export default connect(mapStateToProps)(MyEventsList);
