import React, { Component } from 'react';
import { connect } from 'react-redux';


class CreateEvent extends Component {


    
    handleClick = ()=>{
        this.props.dispatch({type: "NEW_EVENT", payload:{host_id: 1, game_name: "King of Tokyo", date_time: "2020-06-13 20:00:00-05" }});
    }
 
  render() {
    return (
      <div>
          <header>Create new events page</header>
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
  events: state.events
 
});

export default connect(mapStateToProps)(CreateEvent);