import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class CreateEvent extends Component {

    state = {
        host_id: this.props.user.id,
        game_name: this.props.game_name,
        date_time: this.props.date_time

    }
    handleChange = (event, property) => {
        console.log("in handlechange");
        if (property === "game_name")
          this.setState({
            [property]: event.target.value,
          });
      };
    handleClick = ()=>{
        this.props.dispatch({type: "NEW_EVENT", payload: this.state});
    }
 
  render() {
    return (
      <div>
          <header>Create new events page</header>
          <h1>Pick a game</h1>
          <select
          id="game_name"
          onChange={(event) => this.handleChange(event, "game_name")}
        >
          <option value="Ticket to Ride">Ticket to Ride</option>
          <option value="Terra Mystica">Terra Mystica</option>
          <option value="King of Tokyo">King of Tokyo</option>
        </select>
        <br />
        <h1>Pick a date and time!</h1>
        <DatePicker
            selected={this.state.date_time}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Click to select a date"
          />
    <button onClick={this.handleClick}> New Event</button>


      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });

const mapStateToProps = state => ({
  errors: state.errors,
  events: state.events,
  user: state.user
 
});

export default connect(mapStateToProps)(CreateEvent);