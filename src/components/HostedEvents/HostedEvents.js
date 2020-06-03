import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from 'moment';

class HostedEvents extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_ALL_HOSTED_EVENTS",
      payload: this.props.user.id,
    });
  }
  handleClickDelete = (e) => {
    this.props.dispatch({
      type: "DELETE_EVENT_BY_ID",
      payload: parseInt(e.target.value),
    });
  };
  handleClickEdit = (e) => {
    console.log(e.target.value);
    this.props.dispatch({
      type: "GET_EVENT_BY_ID",
      payload: parseInt(e.target.value),
    });
  };

  render() {
    return (
      <div>
        <h1>Hosted Events</h1>
        <table>
          <thead>
            <tr>
              <th>Game Name</th>
              <th>Date/Time</th>
              <th>Delete Event</th>
              <th>Change Event</th>
            </tr>
          </thead>
          <tbody>
            {this.props.hostedEvents.map((event) => (
              <tr key={event.event_id}>
                <td>{event.boardgame_name}</td>
                <td>{moment(event.date_time).format('MMMM Do YYYY, h:mm:ss a')}</td>
                <td>
                  {" "}
                  <button
                    value={event.event_id}
                    onClick={this.handleClickDelete}
                  >
                    Delete Event
                  </button>
                </td>
                <td>
                  {" "}
                  <Link to="/edit">
                    <button
                      value={event.event_id}
                      onClick={this.handleClickEdit}
                    >
                      Change Event
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
