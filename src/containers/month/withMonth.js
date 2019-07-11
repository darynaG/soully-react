import { connect, ReactReduxContext } from "react-redux";
import Month from "../../components/calendar/month"
import * as actions from "../../actions/day.action";
import '../../css/calendarResponsible.css'
import Messages from '../../data/posts'
import moment from 'moment'
import React from 'react'
import store from '../../store'


class WithMonth extends React.Component {
  
}
// const mapStateToProps = state => {
//   console.log("state", state.changeMood);
//   return {
//     day: state.currentday,
//     memos: state.dataReducer.actions,
//     user: state.authentication.user
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onClickDay: (dateObj) => {
//       let day = dateObj.getDate();
//       let month = dateObj.getMonth() + 1;
//       if (day < 10) {
//         day = "0" + day;
//       }
//       if(month < 10) {
//         month = '0' + month;
//       }
//       const year = dateObj.getFullYear();
//       const fullDate = `${year}-${month}-${day}`;
//       //Messages.getByUsername(48, fullDate);
//       dispatch(actions.displayDetailsDays(fullDate));
//       // console.log("with month")
//       // Messages.getAllData();
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Month)
//const WithMonth = connect(mapStateToProps, mapDispatchToProps)(Month);

//export default WithMonth;