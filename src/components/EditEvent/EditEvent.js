import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

class EditEvent extends Component {
  componentDidMount() {  
      console.log('component mounted');
    this.props.dispatch({ type: "GET_ALL_GAMES" });
    // send dispatch to reducer that has one event info
  }
  componentDidUpdate (prevProps){
    if(this.props.eventDetails.event_id !== prevProps.eventDetails.event_id){
        this.setState({
          event_id: this.props.eventDetails.event_id  
        });
    }
  }

  state = {
    event_id: '',
    game_id: '',
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
      console.log(this.state)
    this.props.dispatch({ type: "UPDATE_EVENT_BY_ID", payload: this.state });
    this.props.history.push('/host');
    
  };

  render() {
    console.log("current state for editing", this.props.eventDetails.event_id)
    return (
      <div>
        <h1>Change Event</h1>
        <h3>Choose a game</h3>

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
       
      </div>
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
