import React from "react";
import { connect } from "react-redux";
import {
    Link,
  } from 'react-router-dom';
//   import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
//   import CreateEvent from '../CreateEvent/CreateEvent';
  

// import LogOutButton from "../LogOutButton/LogOutButton";

const handleClick = () =>{

}
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h1 id="welcome">Welcome, {props.user.username}!</h1>
    <h2>Your list of events will go here</h2>
   
   <Link to="/create" ><button onClick={handleClick}>Create Event</button></Link> 
    {/* <p>Your ID is: {props.user.id}</p>
    <LogOutButton className="log-in" /> */}
  </div>
);
// will display users games they are attending and a list of events they can join

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (state) => {
  return {
    user: state.user,
    events: state.events,
  };
};

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
