import { connect } from "react-redux";
import Month from "../components/Month";
import Messages from '../../../../../data/posts'
import * as actions from "../actions";

const mapStateToProps = state => {
  var memo = []
  var a = Messages.getAll().then((data)=>{
    console.log(state.currentday)
    for(let i=0;i<data.length;i++){
        if(state.currentday == data[i].date)
        memo.push(data[i]);
    }
    console.log("with memos")
    console.log(memo)
  });

  return {
    day: state.currentday,
    memos: memo
  };
};

const mapDispatchToProps = dispatch => {
 
  return {
    onClickDay: (dateObj, memos) => {

      console.log("dispathc")
      console.log(memos)
      let day = dateObj.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      const month = dateObj.getMonth() + 1;
      const year = dateObj.getFullYear();
      const fullDate = `${day}/${month}/${year}`;

      dispatch(actions.displayDetailsDays(fullDate));
    },
    onClickSeeAll: memos => {
      dispatch(actions.displayDetailsDays("All Memos"));
    }
  };
};

const WithMonth = connect(mapStateToProps, mapDispatchToProps)(Month);

export default WithMonth;