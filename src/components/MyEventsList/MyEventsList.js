import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import {Container} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
class MyEventsList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MY_EVENTS", payload: this.props.user.id });
  }
handleClick = () =>{
    console.log("in handleclick,", this.props.events.user_id, this.props.myEvents.event_id);
}


  render() {
    return (
      <Container>
        <h2>My Event List</h2>
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Host Name</TableCell>
              <TableCell>Game Name</TableCell>
              <TableCell>Date/Time</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
              {this.props.myEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.host_name}</TableCell>
                  <TableCell>{event.game_name}</TableCell>
                  <TableCell>{moment(event.date_time).format('MMMM Do YYYY, h:mm a')}</TableCell>
                  {/* <td><button onClick={this.handleClick}>Cancel reservation</button></td> */}
                </TableRow>
              ))}
          </TableBody>

        </Table>
        </TableContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  events: state.events,
  myEvents: state.myEvents,
});

export default connect(mapStateToProps)(MyEventsList);
