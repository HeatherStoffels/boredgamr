import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";

import "./MyEventList.css";

class MyEventsList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MY_EVENTS", payload: this.props.user.id });
  }
  handleDeleteEvent = (e) => {
    this.props.dispatch({
      type: "DELETE_EVENT_USER_ATTENDING",
      payload: parseInt(e.currentTarget.value),
    });
    // console.log("in handleclick,", this.props.user.id, parseInt(e.currentTarget.value));
  };

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
                <TableCell>Changed My Mind</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {this.props.myEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell component="th" scope="row">
                    {event.host_name}
                  </TableCell>
                  <TableCell>{event.game_name}</TableCell>
                  <TableCell>
                    {moment(event.date_time).format("MMMM Do YYYY, h:mm a")}
                  </TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      variant="contained"
                      value={event.id}
                      onClick={this.handleDeleteEvent}
                    >
                      Cancel reservation
                    </Button>
                  </TableCell>
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
