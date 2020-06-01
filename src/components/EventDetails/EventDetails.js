import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class EventDetails extends Component {
  handleClick = () => {
    console.log(this.props.eventDetails.event_id);

    this.props.dispatch({
      type: "JOIN_EVENT_WITH_ID",
      payload: {
        user: this.props.user.id,
        event: parseInt(this.props.eventDetails.event_id),
      },
    });
  };
  render() {
    return (
      <div>
        <h1>Gamenight Details</h1>
        <p>{this.props.eventDetails.event_id}</p>
        <p>{this.props.eventDetails.game_name}</p>
        <p>{this.props.eventDetails.date_time}</p>
        <a
          href={this.props.eventDetails.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Game Info</p>
        </a>
        <img
          src={this.props.eventDetails.picture}
          alt={this.props.eventDetails.game_name}
          width="100px"
        />
        <p>{this.props.eventDetails.number_of_players}</p>
        <Link to="/home">
          <button onClick={this.handleClick}>Join Gamenight!</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    eventDetails: state.eventDetails,
    gameDetails: state.gameDetails,
  };
};

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EventDetails);
