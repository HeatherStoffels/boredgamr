import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventItem from '../EventItem/EventItem';


class EventList extends Component {


  render() {
    return (
      <div>
         <h2>My Event List</h2>
          <h4> {this.props.events.map((event) => {
                        return ( <EventItem key={event.id} event={event} />);
                    })}</h4> 

      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  events: state.events
 
});

export default connect(mapStateToProps)(EventList);
