import React, { Component } from 'react';
import { connect } from 'react-redux';



class UserEventsList extends Component {


  render() {
    return (
      <div>
         <h2>My Event List</h2>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  events: state.events
 
});

export default connect(mapStateToProps)(UserEventsList);