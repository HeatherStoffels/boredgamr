import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class EventItem extends Component {
  handleClick = () => {
    console.log("in handleClick", this.props.event);
    this.props.dispatch({ type: "FETCH_GAME" , payload: this.props.event.game_id});
  };
  render() {
    const { event } = this.props;
    return (
      <div>
          <div>
   
          </div>
        <Link to="/details">
          <button onClick={this.handleClick}>Game info</button>
        </Link>
      
      </div>
    );
  }
}

export default connect()(EventItem);
