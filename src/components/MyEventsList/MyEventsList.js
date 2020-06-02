import React, { Component } from "react";
import { connect } from "react-redux";

class MyEventsList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MY_EVENTS", payload: this.props.user.id });
  }
handleClick = () =>{
    console.log("in handleclick,", this.props.events.user_id, this.props.myEvents.event_id);
}
  render() {
    return (
      <div>
        <h2>My Event List</h2>
        <table>
          <thead>
            <tr>
              <th>Host Name</th>
              <th>Game Name</th>
              <th>Date/Time</th>
            </tr>
          </thead>

          <tbody>
              {this.props.myEvents.map((event) => (
                <tr key={event.id}>
                  <td>{event.host_name}</td>
                  <td>{event.game_name}</td>
                  <td>{event.date_time}</td>
                  {/* <td><button onClick={this.handleClick}>Cancel reservation</button></td> */}
                </tr>
              ))}
          </tbody>

        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  events: state.events,
  myEvents: state.myEvents,
});

export default connect(mapStateToProps)(MyEventsList);
