import { connect } from "react-redux";
import Month from "../../components/calendar/month"
import * as actions from "../../actions/day.action";
import '../../css/calendarResponsible.css'
import Posts from '../../data/posts'
import store from '../../store'

const mapStateToProps = state => {
  return {
    day: state.currentday.day,
    information: state.currentday.information,
    user_id:state.authentication.user.user.id
  };
};

const mapDispatchToProps = (dispatch)=> {

  return {
    onClickDay: (dateObj) => {
      let day = dateObj.getDate();
      let month = dateObj.getMonth() + 1;
      if (day < 10) {
        day = "0" + day;
      }
      if(month < 10) {
        month = "0" + month;

      }
     const user = store.getState().authentication.user.user.id
      const year = dateObj.getFullYear();
      const fullDate = `${year}-${month}-${day}`;
      var a = Posts.getByUsername(user,fullDate)
      dispatch(actions.displayDetailsDays(fullDate, a));   
      
    }
  };
};

const WithMonth = connect(mapStateToProps, mapDispatchToProps)(Month);

export default WithMonth;

