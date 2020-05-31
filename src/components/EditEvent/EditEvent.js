import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

class EditEvent extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_ALL_GAMES" });
  }

  state = {
    event_id: 1,
    game_id: "",
    date_time: new Date(),
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
    
  };

  render() {
    return (
      <div>
        <h1>Change Event</h1>

        <select
          id="game_name"
          onChange={(event) => this.handleChange(event, "game_id")}
        >
          {this.props.allBoardgames.map((game) => {
            return (
              <option key={game.id} value={game.id}>
                {game.name}
              </option>
            );
          })}
        </select>
        <br />
        <h1>Pick a date and time!</h1>
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
        <Link to="/host">
          <button onClick={this.handleClick}>Change Event</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
  user: state.user,
  allBoardgames: state.allBoardgames,
});

export default connect(mapStateToProps)(EditEvent);
