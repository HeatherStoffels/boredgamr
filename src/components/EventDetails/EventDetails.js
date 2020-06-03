import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import "./EventDetails.css"

class EventDetails extends Component {
  handleClick = () => {
    this.props.dispatch({
      type: "JOIN_EVENT_WITH_ID",
      payload: {
        user: this.props.user.id,
        event: parseInt(this.props.eventDetails.event_id),
      },
    });
    // this.props.dispatch({type: "GET_MY_EVENTS"});
  };
 
  render() {
    return (
      <div className='details'>
        <h1>Gamenight Details</h1>
        <h2>{this.props.eventDetails.game_name}</h2>
        <h3>{moment(this.props.eventDetails.date_time).format("MMMM Do YYYY, h:mm a")}</h3>
        
        <img
          src={this.props.eventDetails.picture}
          alt={this.props.eventDetails.game_name}
          width="100px"
        />
        <h3>Number of Players: {this.props.eventDetails.number_of_players}</h3>
        <a
          href={this.props.eventDetails.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Game Info</p>
        </a>
        <Link to="/home">
          <button onClick={this.handleClick}>Join Gamenight!</button>
        </Link><br/>
        <Link to="/home"><button>Back</button></Link>
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
