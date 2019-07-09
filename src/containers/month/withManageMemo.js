import { connect } from "react-redux";

import ManageMemo from "../../components/calendar/manageMemo"

import Messages from '../../data/posts.js'



const mapStateToProps = state => {
  var stor = [];
  const { user } = state.authentication;
  // var a =  Messages.getByDayAndUsername(this.props.user_id, this.props.date);
  // Messages.map((data) => {
  //   if (state.currentday == data.date && data.username == user["username"])
  //     stor.push({
  //       username: data.username,
  //       mood: data.mood,
  //       text: data.text,
  //       activities: data.activities
  //     })
  // })
  return {
    memos: stor,
    day: state.currentday
  };
};
const WithManageMemo = connect(mapStateToProps)(ManageMemo);

export default WithManageMemo;