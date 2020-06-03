import React from "react";
import { connect } from "react-redux";
import {Container} from "@material-ui/core";
import EventList from "../EventList/EventList";
import MyEventsList from "../MyEventsList/MyEventsList";



// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <Container>
   
         
    <h1 id="welcome">Welcome, {props.user.username}!</h1>

    <MyEventsList user={props.user}/>
    <EventList />
  </Container>
);
// will display users games they are attending and a list of events they can join

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(UserPage);
