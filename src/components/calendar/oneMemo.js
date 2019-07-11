import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/oneMemo.css";
import Messages from "../../data/posts"
import store from '../../store'

class OneMemo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <span
        className="itemMemoContainer">
        <ul>{this.props.act.length}</ul>
        </span>
        // ref={element => (this.element = element)}>
        // <span
        //   className={`item-memo-textcontent ${this.state.done ? "done" : ""}`}>
        //   {day === "All Memos" && <span className="dateMemoText">{date}</span>}
        //   <div>
        //     {/* <h1>{username}</h1>
        //     <i>{mood}</i>
        //     <p>{text}</p> */}
        //     <ul>{actions_}</ul>
        //   </div>
        // </span>
      
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
