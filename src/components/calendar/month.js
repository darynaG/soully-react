import React from "react";
import "../../css/month.css";
import '../../css/calendarResponsible.css'
import Calendar from "react-calendar";
import Messages from '../../data/posts'
import store from '../../store'
import * as actions from "../../actions/day.action";
import {connect} from 'react-redux'
import ManageMemo from '../calendar/manageMemo'

class MonthC extends React.Component{

  act = [];
  render(){
    
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
                      this.props.onClickDay(day);
                    }}
                  />
                </div>
              </div>
            </div>
              <div className="whenMemos">
                
                <ManageMemo/>
              
              </div>
          </div>
        );
  }
}
const mapStateToProps = state => {
  return {
    day: state.currentday,
    memos: state.dataReducer.actions,
    user: state.authentication.user,
    mood: state.dataReducer.mood
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickDay: (dateObj) => {
      let day = dateObj.getDate();
      let month = dateObj.getMonth() + 1;
      if (day < 10) {
        day = "0" + day;
      }
      if(month < 10) {
        month = '0' + month;
      }
      const year = dateObj.getFullYear();
      const fullDate = `${year}-${month}-${day}`;
      dispatch(actions.displayDetailsDays(fullDate));
      Messages.getDayMood(store.getState().authentication.user.user.id, fullDate);
      Messages.getDayActivity(store.getState().authentication.user.user.id, fullDate);
      Messages.getDayStory(store.getState().authentication.user.user.id, fullDate);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthC)