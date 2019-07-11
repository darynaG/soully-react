import React from "react";
import PropTypes from "prop-types";
import "../../css/month.css";
import '../../css/calendarResponsible.css'
import Calendar from "react-calendar";

import WithManageMemo from "../../containers/calendar/withManageMemo";


const Month = ({ onClickDay, day, memos }) => {
  return (
    <div className="up">
      <div class="calendar">
        <div className="title">
          <div> Monthly Log </div>
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
      </div>
        <div className="whenMemos">
          <WithManageMemo />
        </div>
    </div>
  );
};

Month.propTypes = {
  onClickDay: PropTypes.func.isRequired,
  day: PropTypes.string,
  memos: PropTypes.object
};

export default Month;


