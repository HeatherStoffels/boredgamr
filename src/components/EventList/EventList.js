import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
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
  }
  handleClick = (e) => {
    this.props.dispatch({
      type: "GET_EVENT_BY_ID",
      payload: e.currentTarget.value,
    });
  };

  render() {
    return (
      <Container maxWidth={false}>
        <h2>Event List</h2>

        <Grid container>
          {this.props.events.map((event) => {
            return (
              <Grid item xs={3}>
                <Box m={2}>
                  <Card>
                    <CardActionArea>
                      <Typography gutterBottom variant="h5" component="h2">
                        {event.name}
                        <br />
                        Hosted By: {event.username}
                      </Typography>
                      <CardMedia
                        image={event.picture}
                        title={event.name}
                        component="img"
                      />
                      <CardContent>
                        {moment(event.date_time).format("MMMM Do YYYY, h:mm a")}{" "}
                      </CardContent>
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
              //   <li>
              //     {event.name}
              //     <br />
              //     Host: {event.username} <br />
              //     {moment(event.date_time).format("MMMM Do YYYY, h:mm a")}{" "}
              //     <img
              //       src={event.picture}
              //       top
              //       width="100px"
              //       alt={event.game_name}
              //     />
              //     <br />
              //     <Link to="/details" underline="none">
              //       <Button
              //         size="small"
              //         variant="contained"
              //         value={parseInt(event.events_id)}
              //         onClick={this.handleClick}
              //       >
              //         More Info
              //       </Button>
              //     </Link>
              //   </li>
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
