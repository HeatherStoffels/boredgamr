import React, { Component } from "react";
import { connect } from "react-redux";


class EventDetails extends Component {
 
  render() {
    return (
      <div>
        <h1>Details Page</h1>
        <p>{this.props.eventDetails.event_id}</p>
        <p>{this.props.eventDetails.game_name}</p>
        <p>{this.props.eventDetails.date_time}</p>
        <a href={this.props.eventDetails.link} target="_blank">
          <p>Game Info</p>
        </a>
        <img
          src={this.props.eventDetails.picture}
          alt={this.props.eventDetails.game_name}
        />
        <p>{this.props.eventDetails.number_of_players}</p>
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
