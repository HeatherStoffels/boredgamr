import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class EventList extends Component {
  handleClick = (e) => {
    console.log(e.target.value);
    this.props.dispatch({ type: "GET_EVENT_BY_ID", payload: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>Event List</h2>
        <ul>
          {this.props.events.map((event) => (
            <li key={event.events_id}>
              {event.username} - {event.name} - {event.date_time} -
              <Link to="/details">
                <button value={parseInt(event.events_id)} onClick={this.handleClick}>
                  More Info
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(mapStateToProps)(EventList);
