import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/allMemos.css"
import OneMemo from "./oneMemo";

class AllMemos extends Component {
  allMemos = () => {
    const { memos, day } = this.props;
    return memos.map(memo => {
      return (
        <li className="item-memo">
          <OneMemo
            day={day}
            date={memo.date}
            username={memo.username}
            text={memo.text}
            mood={memo.mood}
            activities={memo.activities}
          />
        </li>
      );
    });
  };

  render() {
    return <ul className="allMemosList"> {this.allMemos()} </ul>;
  }
}

AllMemos.propTypes = {
  memos: PropTypes.array,
  day: PropTypes.string,
  deleteItem: PropTypes.func
};

export default AllMemos;