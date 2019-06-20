import { connect } from "react-redux";
import ManageMemo from "../components/ManageMemo";
import * as actions from "../actions";
import Messages from '/Users/admin/Documents/front-end/soully-react 2/src/data/stories.json'


const mapStateToProps = state => {
  var stor = [];
  Messages.map((data)=>{
    if(state.currentday ==data.date)
    stor.push({
      username:data.username,
      mood:data.mood,
      text:data.text,
      activities: data.activities
    })
  })
  console.log(stor);

  return {
    memos: stor,
    day: state.currentday
  };
};
const WithManageMemo = connect(mapStateToProps)(ManageMemo);

export default WithManageMemo;