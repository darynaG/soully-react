import React from "react";
import PropTypes from "prop-types";
import "./Month.css";
import Messages from '../../../../../data/posts'

import Calendar from "react-calendar";

import WithManageMemo from "../containers/WithManageMemo";

const Month = ({ onClickDay, onClickSeeAll, day, memos }) => {
    
       /* var a = Messages.getAll().then((data)=>{
            for(let i=0;i<data.length;i++){
                if(day == data[i].date)
                memos.push(data[i].text);
            }
        })
        console.log(memos);*/
  return (
    <div className="up">
      <div className="title">
        <div>My Calendar with Redux</div>
      </div>
      <div className="content">
        <div className="calendarContainer">
          <Calendar
            className="calendar"
            onClickDay={day => {
              onClickDay(day, memos);
            }}
          />
        </div>
      </div>
      {day && (
        <div className="whenMemos">
          {day !== "All Memos" && (
            <button
              className="buttonSeeAllMemos"
              onClick={() => {
                onClickSeeAll(memos);
              }}
            >
              See all memos
            </button>
          )}
          <WithManageMemo />
        </div>
      )}
    </div>
  );
};

Month.propTypes = {
  onClickDay: PropTypes.func.isRequired,
  onClickSeeAll: PropTypes.func.isRequired,
  day: PropTypes.string,
  memos: PropTypes.array
};

export default Month;