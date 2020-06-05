import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// Material UI imports
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

class EditEvent extends Component {
  componentDidMount() {
    // state set's when the document loads.
    setTimeout(() => {
      this.setState({
        event_id: this.props.eventDetails.event_id,
        game_id: this.props.eventDetails.game_id,
        date_time: new Date(this.props.eventDetails.date_time),
      });
    }, 1000);
  }
  // state to be updated
  state = {
    event_id: null,
    game_id: null,
    date_time: null,
  };

  handleChange = (event, property) => {
    switch (property) {
      case "game_id":
        return this.setState({
          [property]: event.target.value,
        });

      case "date_time":
        return this.setState({
          [property]: event,
        });
      default:
        return this.state;
    }
  };
  handleClick = () => {
    this.props.dispatch({ type: "UPDATE_EVENT_BY_ID", payload: this.state });
    // dispatches PUT request to update a specific event the user is hosting.
    this.props.history.push("/host");
    // redirects the user back to the Host page to view changes.
  };

  render() {
    return (
      <Container>
        <h1>Change Event</h1>
        <h3>Choose a game</h3>
        <FormControl>
          <Select
            displayEmpty
            id="game_name"
            onChange={(event) => this.handleChange(event, "game_id")}
          >
            <MenuItem defaultValue> Pick a game</MenuItem>
            {this.props.allBoardgames.map((game) => {
              return (
                <MenuItem key={game.id} value={game.id}>
                  {game.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <br />
        <h3>Choose a date and time</h3>
        <DatePicker
          selected={this.state.date_time}
          onChange={(event) => this.handleChange(event, "date_time")}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Click to select a date"
        />

        <button onClick={this.handleClick}>Change Event</button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
  user: state.user,
  allBoardgames: state.allBoardgames,
  eventDetails: state.eventDetails,
});

export default connect(mapStateToProps)(EditEvent);
