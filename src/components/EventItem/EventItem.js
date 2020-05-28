import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class EventItem extends Component {
  handleClick = () => {
    console.log("in handleClick", this.props.event);
    this.props.dispatch({ type: "FETCH_GAME", payload: 1 });
  };
  render() {
    const { event } = this.props;
    return (
      <div>
        <Link to="/details">
          <button onClick={this.handleClick}>{event.game_name}</button>
        </Link>
        <h4>{event.date_time}</h4>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
// const mapStateToProps = (state) => ({
//   errors: state.errors,
//   events: state.events,
//   user: state.user,
// });

export default connect()(EventItem);
