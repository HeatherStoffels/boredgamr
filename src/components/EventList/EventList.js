import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import moment for date and time display
import moment from "moment";
// Material UI imports
import { Button, Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "./EventList.css";

class EventList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_ALL_GAMES" });
    // on document load, will fetch all games from database.
  }
  handleClick = (e) => {
    this.props.dispatch({
      type: "GET_EVENT_BY_ID",
      payload: e.currentTarget.value,
      // this click sends user to the /details page and then displays details for a specific event.
    });
  };

  render() {
    return (
      <Container maxWidth={false}>
        <h2>Upcoming Events List</h2>
        <Grid container>
          {this.props.events.map((event) => {
            return (
              <Grid key={event.events_id} item xs={3}>
                <Box m={1} p={1}>
                  <Card>
                    <CardActionArea>
                      <Typography gutterBottom variant="h6" component="h2">
                        {moment(event.date_time).format("MMMM Do YYYY, h:mm a")}{" "}
                      </Typography>
                      <br />
                      <Typography variant="body1">
                        Hosted By: {event.username}
                      </Typography>
                      <CardMedia
                        width={100}
                        image={event.picture}
                        title={event.name}
                        component="img"
                      />
                      <CardContent>{event.name}</CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Link to="/details" underline="none">
                        <Button
                          size="small"
                          variant="contained"
                          value={parseInt(event.events_id)}
                          onClick={this.handleClick}
                        >
                          More Info
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
  allBoardgames: state.allBoardgames,
});

export default connect(mapStateToProps)(EventList);
