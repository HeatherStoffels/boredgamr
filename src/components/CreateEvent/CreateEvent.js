import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    Link,
  } from 'react-router-dom';

class CreateEvent extends Component {

    componentDidMount(){
      this.props.dispatch({type:'FETCH_ALL_GAMES'});
    }

  state = {
    host_id: this.props.user.id,
    game_name: "",
    date_time: new Date(),
  };
  handleChange = (event, property) => {
    
    switch (property) {
      case "game_name":
        return this.setState({
          [property]: event.target.value,
        });
      case "date_time":
        console.log("in date_time", event);
        return this.setState({
          [property]: event
        });
      default:
        return this.state;
    }
  };
  handleClick = () => {
    console.log(this.state);
    this.props.dispatch({type: "NEW_EVENT", payload: this.state});
    // alert("Your event has been created!");
  };

  render() {
    return (
      <div>
        <header>Create new events page</header>
        <h1>Pick a game</h1>
        <h4> {this.props.boardgame.map((game) => {
                        return ( game={game} );
                    })}</h4> 
    
        <select
          id="game_name"
          onChange={(event) => this.handleChange(event, "game_name")}
        >
          <option value="">Select a game</option>
          <option value={1}>Ticket to Ride</option>
          <option value="Terra Mystica">Terra Mystica</option>
          <option value="King of Tokyo">King of Tokyo</option>
          <option value="Lords of Waterdeep">Lords of Waterdeep</option>
          <option value="Through the Ages">Through the Ages</option>
          <option value="Terraforming Mars">Terraforming Mars</option>
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
        <Link to="/home"><button onClick={this.handleClick}> New Event</button></Link>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  
  events: state.events,
  user: state.user,
  boardgame: state.boardgame,
  
});

export default connect(mapStateToProps)(CreateEvent);
