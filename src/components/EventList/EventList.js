import React, { Component } from "react";
import { connect } from "react-redux";


class EventList extends Component {
  render() {
    return (
      <div>
        <h2>Event List</h2>
        <ul>
            {this.props.events.map(event=>(
                <li key={event.id}>{event.username} - {event.name} - {event.date_time}</li>
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
