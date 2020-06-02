import React, { Component } from "react";
import { connect } from "react-redux";

class MyEventsList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MY_EVENTS", payload: this.props.user.id });
  }

  render() {
    return (
      <div>
        <h2>My Event List</h2>
        <ul>
          {this.props.myEvents.map((event) => (
            <li key={event.events_id}>
              {event.host_name} - {event.game_name} - {event.date_time}
            </li>
          ))}
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
