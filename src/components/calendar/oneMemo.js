import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/oneMemo.css";

class OneMemo extends Component {
  state = {
    done: false
  };


  render() {
    const { day, date, text, mood, username, activities } = this.props;
    const actions_ = activities.map((action) =>
      <li> {action} </li>);

    return (
      <span
        className="itemMemoContainer"
        ref={element => (this.element = element)}>
        <span
          className={`item-memo-textcontent ${this.state.done ? "done" : ""}`}>
          {day === "All Memos" && <span className="dateMemoText">{date}</span>}
          <div>
            <h1>{username}</h1>
            <i>{mood}</i>
            <p>{text}</p>
            <ul>{actions_}</ul>
          </div>
        </span>
      </span>
    );
  }
}

OneMemo.propTypes = {
  day: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  mood: PropTypes.string,
  username: PropTypes.string,
  activities: PropTypes.array
};

export default OneMemo;
