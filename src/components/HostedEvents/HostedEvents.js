import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class HostedEvents extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_ALL_HOSTED_EVENTS",
      payload: this.props.user.id,
    });
  }
  handleClick = (e) => {
    this.props.dispatch({
      type: "DELETE_EVENT_BY_ID",
      payload: parseInt(e.target.value),
    });
  };
  handleClickTwo = (e)=>{
    this.props.dispatch({
        type: "GET_EVENT_BY_ID",
        payload: parseInt(e.target.value),
      });
  }

  render() {
    return (
      <div>
        <h1>Hosted Events</h1>
        <ul>
          {this.props.hostedEvents.map((event) => (
            <li key={event.event_id}>
              {event.date_time} - {event.boardgame_name}{" "}
              <button value={event.event_id} onClick={this.handleClick}>
                Delete Event
              </button>
              <Link to='/edit'><button value={event.event_id} onClick={this.handleClickTwo}>Change Event</button></Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
  user: state.user,
  allBoardgames: state.allBoardgames,
  hostedEvents: state.hostedEvents,
});

export default connect(mapStateToProps)(HostedEvents);
