import React, { Component } from "react";
import { connect } from "react-redux";

class HostedEvents extends Component {

    componentDidMount(){
      this.props.dispatch({type:'GET_ALL_HOSTED_EVENTS', payload: this.props.user.id});
    }

  

  render() {
    return (
      <div>
       <h1>Hosted Events</h1>

      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  
  events: state.events,
  user: state.user,
  allBoardgames: state.allBoardgames,
  hostedEvents: state.hostedEvents
  
});

export default connect(mapStateToProps)(HostedEvents);