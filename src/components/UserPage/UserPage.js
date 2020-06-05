import React from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
// importing other components
import EventList from "../EventList/EventList";
import MyEventsList from "../MyEventsList/MyEventsList";

const UserPage = (props) => (
  <Container>
    <h1 id="welcome">Welcome, {props.user.username}!</h1>
    <MyEventsList user={props.user} />
    <EventList />
  </Container>
);

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(UserPage);
