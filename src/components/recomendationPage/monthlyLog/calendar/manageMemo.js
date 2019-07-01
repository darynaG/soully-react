import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../../../css/ManageMemo.css";
import AllMemos from "./allMemos";


class ManageMemo extends Component {

  render() {
    const { memos, day } = this.props;
    return (
      <div className = "manageMemos">
        {day && (
          <div className = "memoOfTheDay">
            <div className = "dayClicked"> {day} </div>
            {day === "All Memos" && <div> Click on a day to add a memo! </div>}
            {memos.length === 0 &&
              day !== "All Memos" && (
                <div className = "memoListEmpty">
                  You have not share your day! Tell us about it!
                </div>
              )}
            {memos.length !== 0 && (
              <div className = "memoListOfTheDay">
                <AllMemos memos = {memos} day = {day} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

ManageMemo.propTypes = {
  day: PropTypes.string,
  memos: PropTypes.array

};

export default ManageMemo;