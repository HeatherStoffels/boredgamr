import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

class EventDetails extends Component {
  handleClick = (e) => {
    console.log("click value=", e.currentTarget.value);
    this.props.dispatch({
      type: "JOIN_EVENT_WITH_ID",
      payload: {
        user: this.props.user.id,
        event: parseInt(e.currentTarget.value),
      },
    });
  };

  render() {
    return (
      <Container>
        <Grid>
          <h1>Event Details</h1>
          <h2>{this.props.eventDetails.game_name}</h2>
          <h3>
            {moment(this.props.eventDetails.date_time).format(
              "MMMM Do YYYY, h:mm a"
            )}
          </h3>

          <img
            src={this.props.eventDetails.picture}
            alt={this.props.eventDetails.game_name}
            width="300px"
          />
          <h3>
            Number of Players: {this.props.eventDetails.number_of_players}
          </h3>
          <a
            href={this.props.eventDetails.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Game Info</p>
          </a>
          <Link to="/home">
            <Button
              size="small"
              variant="contained"
              value={this.props.eventDetails.event_id}
              onClick={this.handleClick}
            >
              Join Gamenight!
            </Button>
          </Link>
          <br />
          <Link to="/home">
            <Button size="small" variant="contained">
              Back
            </Button>
          </Link>
        </Grid>
      </Container>
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
