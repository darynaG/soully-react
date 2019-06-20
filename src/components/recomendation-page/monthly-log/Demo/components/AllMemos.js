import React, { Component } from "react";
import PropTypes from "prop-types";
import "./AllMemos.css";
import OneMemo from "./OneMemo";
import Day from '../../../daily-status/Day'

class AllMemos extends Component {
 
 
  allMemos = () => {
    const { memos, day } = this.props;
    return memos.map(memo => {
      return (
        <li className="item-memo" key={memo.id}>
          <OneMemo
            day={day}
            date={memo.date}
            username={memo.username}
            text={memo.text}
            mood={memo.mood}
            activities = {memo.activities}
          />
        </li>
      );
    });
  };

  render() {
    return <ul className="allMemosList">{this.allMemos()}</ul>;
  }
}

AllMemos.propTypes = {
  memos: PropTypes.array,
  day: PropTypes.string,
  deleteItem: PropTypes.func
};

export default AllMemos;
