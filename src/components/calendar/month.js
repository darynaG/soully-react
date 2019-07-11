import React from "react";
import PropTypes from "prop-types";
import "../../css/month.css";
import '../../css/calendarResponsible.css'
import Calendar from "react-calendar";
import Messages from '../../data/posts'
import store from '../../store'
import * as actions from "../../actions/day.action";

import WithManageMemo from "../../containers/month/withManageMemo";
import OneMemo from "./oneMemo";
import {connect} from 'react-redux'
import ManageMemo from '../calendar/manageMemo'

class MonthC extends React.Component{
  constructor(props){
    super(props);
  }
  act = [];
  componentDidMount(){
    console.log("IN DID MOUNT IN MONTH_C")
  //Messages.getByUsername(store.getState().authentication.user.user.id, this.props.day.day);
}

  componentDidUpdate(){
    console.log("IN DID UPDATE IN MONTH_C")

    // this.act = []
    // Messages.getByUsername(store.getState().authentication.user.user.id, this.props.day.day);
    // //console.log("LENGTHHHHHHHHH",this.props.memos)//store.getState().dataReducer.postsPersonal.activities.length)
    // store.getState().dataReducer.postsPersonal.activities.map((data)=>
    // this.act.push(data)
    // )
  }
  

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
                      //Messages.getByUsername(store.getState().authentication.user.user.id, this.props.day.day);
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
  console.log("MAP STATE TO PROPS MONTH");
  return {
    day: state.currentday,
    memos: state.dataReducer.actions,
    user: state.authentication.user,
    mood: state.dataReducer.mood
  };
};

const mapDispatchToProps = dispatch => {
  console.log("MAP DISPATCH MONTH");
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
      //Messages.getByUsername(48, fullDate);
      dispatch(actions.displayDetailsDays(fullDate));
      Messages.getDayMood(store.getState().authentication.user.user.id, fullDate);
      Messages.getDayActivity(store.getState().authentication.user.user.id, fullDate);
      Messages.getDayStory(store.getState().authentication.user.user.id, fullDate);
      // console.log("with month")
      // Messages.getAllData();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthC)
//export default Month;
// const Month = ({ onClickDay, day, memos }) => {
//   return (
//     <div className="up">
//       <div class="calendar">
//         <div className="title">
//           <div> Monthly Log </div>
//         </div>
//         <div className="content">
//           <div className="calendarContainer">
//             <Calendar
//               className="calendar"
//               onClickDay={day => {
//                 onClickDay(day, memos);
//               }}
//             />
//           </div>
//         </div>
//       </div>
//         <div className="whenMemos">
//           <WithManageMemo />
//         </div>
//     </div>
//   );
// };

// Month.propTypes = {
//   onClickDay: PropTypes.func.isRequired,
//   day: PropTypes.string,
//   memos: PropTypes.array
// };
