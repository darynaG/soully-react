import React, { Component } from "react";
import PropTypes from "prop-types";


class CurrentDay extends Component {

  render() {
      const { day, date, mood, username, text, activities} = this.props;
      /*
      var actions = activities.map((action) =>
      <li> {action} </li>);
      */

    return (
      <div>
          <h1>Daily Mood</h1>
          <h1>{date}</h1>
          <h2>{username}</h2>
          <h3>{mood}</h3>
          <p>{text}</p>

      </div>
    );
  }
}
CurrentDay.propTypes = {
    day: PropTypes.string,
    date: PropTypes.string,
    mood: PropTypes.string,
    username: PropTypes.string,
    text: PropTypes.string,
    activities: PropTypes.array
}
export default CurrentDay;
