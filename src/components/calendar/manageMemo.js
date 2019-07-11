import React, { Component } from "react";
import PropTypes from "prop-types";
// import '../../css/ManageMemo.css'
import "../../css/manageMemo.css";

class ManageMemo extends Component {
  componentDidMount(){
  
  }

  render() {
    // const { memos, day } = this.props;

    return (
      <div className="manageMemos">
        
        {/* { <OneMemo day = {day} moods = {memos.moods} activities = {memos.activities} stories = {memos.stories}/> } */}

        {/* <OneMemo/> */}
        {/* {day && (
          <div className="memoOfTheDay">
            <div className="dayClicked"> {day} </div>
            {day === "All Memos" && <div> Click on a day to add a memo! </div>}
            {memos.length === 0 &&
              day !== "All Memos" && (
                <div className="memoListEmpty">
                  You have not share your day! Tell us about it!
                </div>
              )}
            {memos.length !== 0 && (
              <div className="memoListOfTheDay">
                <AllMemos memos={memos} day={day} />
              </div>
            )}
          </div>
        )} */}
      </div>
    );
  }
}

ManageMemo.propTypes = {
  day: PropTypes.string,
  memos: PropTypes.object

};

export default ManageMemo;