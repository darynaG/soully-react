import { connect } from "react-redux";
import Month from "../../components/calendar/month"
import * as actions from "../../actions/day.action";


const mapStateToProps = state => {
  console.log("state", state.changeMood);
  return {
    day: state.currentday,
    memos: state.data
  };
};

const mapDispatchToProps = dispatch => {


  return {
    onClickDay: (dateObj, memos) => {
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
    },
    onClickSeeAll: memos => {
      dispatch(actions.displayDetailsDays("All Memos"));
    }
  };
};

const WithMonth = connect(mapStateToProps, mapDispatchToProps)(Month);

export default WithMonth;