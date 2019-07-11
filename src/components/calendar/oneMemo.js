import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
// import "../../css/OneMemo.css";
import "../../css/oneMemo.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faQuoteLeft,
  faQuoteRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faQuoteLeft,
  faQuoteRight
)

class OneMemo extends Component {
  state = {
    done: false
  };


  render() {
    const { day, stories, moods, username, activities } = this.props;
    const actions = activities.map((action) =>
      <li> {action} </li>);

    return (
      <span
        className="itemMemoContainer"
        ref={element => (this.element = element)}>
        <span
          className={`item-memo-textcontent ${this.state.done ? "done" : ""}`}>
          {day === "All Memos" && <span className="dateMemoText">{day}</span>}
          <div>
            <h1>{username}</h1>
            {/* <i>{mood}</i>
            <p>{text}</p> */}
            <ul>{actions}</ul>
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
