import { connect } from "react-redux";

import ManageMemo from "../../components/calendar/manageMemo"

import Messages from '../../data/stories.json'
import Posts from "../../data/posts"


const mapStateToProps = state => {
  var stor = [];
  const { user } = state.authentication;
  // console.log(state.authentication.user.user.id)
  // Posts.getByDayAndUsername(state.authentication.user.user.id, state.currentday)
  // console.log("hjgkugikug", a)

  Messages.map((data) => {
    if (state.currentday == data.date && data.username == user["username"])
      stor.push({
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