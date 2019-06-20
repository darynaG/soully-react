import { connect } from "react-redux";
import ManageMemo from "../components/recomendation-page/monthly-log/Calendar/ManageMemo";
import Messages from '/Users/admin/Documents/front-end/soully-react 2/src/data/stories.json'


const mapStateToProps = state => {
  var stor = [];
  Messages.map((data) => {
    if(state.currentday == data.date)
    stor.push( {
      username: data.username,
      mood: data.mood,
      text: data.text,
      activities: data.activities
    })
  })
  return {
    memos: stor,
    day: state.currentday
  };
};
const WithManageMemo = connect(mapStateToProps)(ManageMemo);

export default WithManageMemo;