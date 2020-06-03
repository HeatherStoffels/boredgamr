import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import Button from "@material-ui/core/Button";

class EventList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_ALL_GAMES" });
  }
  handleClick = (e) => {
    this.props.dispatch({ type: "GET_EVENT_BY_ID", payload: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <h2>Event List</h2>

        <ul>
          {this.props.events.map((event) => (
            <li key={event.events_id}>
              Host: {event.username} - {event.name} -{" "}
              {moment(event.date_time).format("MMMM Do YYYY, h:mm a")}{" "}
              <img src={event.picture} width="100px" alt={event.game_name} />
              <Link to="/details">
                <Button
                  size="small"
                  variant="contained"
                  value={parseInt(event.events_id)}
                  onClick={this.handleClick}
                >
                  More Info
                </Button>
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
