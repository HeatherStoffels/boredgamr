import React, { Component } from "react";
import { connect } from "react-redux";

class MyEventsList extends Component {

    componentDidMount(){
        this.props.dispatch({type: "GET_MY_EVENTS", payload: this.props.user.id});
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
  myEvents: state.myEvents,
});

export default connect(mapStateToProps)(MyEventsList);
