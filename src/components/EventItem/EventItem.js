import React, { Component } from "react";

class EventItem extends Component {
  render() {
    const { event } = this.props;
    return (
      <div>
        <h2>{event.game_name}</h2>
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

export default EventItem;
