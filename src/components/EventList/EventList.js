import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import Button from "@material-ui/core/Button";
import { Card, CardImg, CardBody, CardTitle, CardDeck, } from "reactstrap";
import "./EventList.css"

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
      <div className="eventList">
        <h2>Event List</h2>

        <ul>
          {this.props.events.map((event) => {
            return (
     
          <CardDeck>
              <Card className="card" body outline color="primary">
                <CardBody>
                <CardTitle>{event.name}</CardTitle> <br/>
                  Host: {event.username} <br/>
                  {moment(event.date_time).format("MMMM Do YYYY, h:mm a")}{" "}
                </CardBody>
                <CardImg
                  src={event.picture}
                  top
                  width="100px"
                  style={{ width: "50%", height: "40%" }}
                  alt={event.game_name}
                />
                <br/>
                <Link to="/details">
                  <Button
                    size="small"
                    variant="contained"
                    value={parseInt(event.events_id)}
                    onClick={this.handleClick}
                  >
                    More Info
                  </Button>
                </Link>
              </Card>
              </CardDeck>
           
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
  allBoardgames: state.allBoardgames,
});

export default connect(mapStateToProps)(EventList);
