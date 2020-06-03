import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

class EventList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_ALL_GAMES" });
  }
  handleClick = (e) => {
    this.props.dispatch({ type: "GET_EVENT_BY_ID", payload: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>Event List</h2>

        <ul>
          {this.props.events.map((event) => (
            <li key={event.events_id}>
              {event.username} - {event.name} - {moment(event.date_time).format('MMMM Do YYYY, h:mm:ss a')} <img src={event.picture} width="100px" alt={event.game_name}/>
           
              <Link to="/details">
                <button
                  value={parseInt(event.events_id)}
                  onClick={this.handleClick}
                >
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
  allBoardgames: state.allBoardgames,
});

export default connect(mapStateToProps)(EventList);
