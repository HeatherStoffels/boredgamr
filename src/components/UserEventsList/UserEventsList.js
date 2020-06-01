import React, { Component } from "react";
import { connect } from "react-redux";

class UserEventsList extends Component {

  render() {
    return (
      <div>
        <h2>My Event List</h2>
        <ul>
          {/* {this.props.events.map((event) => (
            <li key={event.events_id}></li>
          ))} */}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  events: state.events,
});

export default connect(mapStateToProps)(UserEventsList);
