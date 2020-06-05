import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import moment for displaying date and time
import moment from "moment";
// imports from Material UI
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";

class HostedEvents extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_ALL_HOSTED_EVENTS",
      payload: this.props.user.id,
      // when document loads, all hosted events are fetched and displayed.
    });
  }
  handleClickDelete = (e) => {
    this.props.dispatch({
      type: "DELETE_EVENT_BY_ID",
      payload: parseInt(e.currentTarget.value),
      // when clicked, this specific event will be deleted from database and DOM.
    });
  };
  handleClickEdit = (e) => {
    this.props.dispatch({
      type: "GET_EVENT_BY_ID",
      payload: parseInt(e.currentTarget.value),
      // this will bring user to the edit page and allow them to update a specific event.
    });
  };

  render() {
    return (
      <Container>
        <h1>Hosted Events</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Game Name</TableCell>
                <TableCell>Date/Time</TableCell>
                <TableCell>Delete Event</TableCell>
                <TableCell>Change Event</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.hostedEvents.map((event) => (
                <TableRow key={event.event_id}>
                  <TableCell component="th" scope="row">
                    {event.boardgame_name}
                  </TableCell>
                  <TableCell>
                    {moment(event.date_time).format("MMMM Do YYYY, h:mm a")}
                  </TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      variant="contained"
                      value={event.event_id}
                      onClick={this.handleClickDelete}
                    >
                      Delete Event
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Link to="/edit">
                      <Button
                        size="small"
                        variant="contained"
                        value={event.event_id}
                        onClick={this.handleClickEdit}
                      >
                        Change Event
                      </Button>
                    </Link>
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
  events: state.events,
  user: state.user,
  allBoardgames: state.allBoardgames,
  hostedEvents: state.hostedEvents,
});

export default connect(mapStateToProps)(HostedEvents);
