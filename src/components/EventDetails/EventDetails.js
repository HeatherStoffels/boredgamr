import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class EventDetails extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_GAME_BY_ID", payload: 1 });
    this.props.dispatch({
      type: "GET_EVENT_BY_ID",
      payload: 1,
    });
  }
  render() {
    return (
      <div>
        <h1>Details Page</h1>
        <p>{this.props.eventDetails.event_id}</p>
        <p>{this.props.eventDetails.game_name}</p>
        <p>{this.props.eventDetails.date_time}</p>
        {/* <Link to={this.props.eventDetails.link}>
          <p>Game Info</p>
        </Link> */}
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
