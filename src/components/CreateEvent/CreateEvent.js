import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    Link,
  } from 'react-router-dom';
//   import Button from "@material-ui/core/Button";

class CreateEvent extends Component {

    componentDidMount(){
      this.props.dispatch({type:'GET_ALL_GAMES'});
    }

  state = {
    host_id: this.props.user.id,
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
          [property]: event
        });
      default:
        return this.state;
    }
  };
  handleClick = () => {
    
    this.props.dispatch({type: "NEW_EVENT", payload: this.state});
   
  
  };

  render() {
    return (
      <div>
       
        <h3>Pick a game</h3>
        <select
          id="game_name"
          onChange={(event) => this.handleChange(event, "game_id")}
        ><option selected>Pick a game</option>
            {this.props.allBoardgames.map((game)=>{
            return (<option key={game.id} value={game.id}>{game.name}</option>)
        })}
        </select>
        <br />
        <h3>Pick a date and time!</h3>
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
  allBoardgames: state.allBoardgames,
  
});

export default connect(mapStateToProps)(CreateEvent);
