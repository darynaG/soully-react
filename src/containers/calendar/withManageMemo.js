import { connect } from "react-redux";


import ManageMemo from "../../components/calendar/manageMemo"


const mapStateToProps = state => {

  return {
    memos: state.currentday.information,
    day: state.currentday.day,
    user_id:state.authentication.user.user.id
  };
};
const WithManageMemo = connect(mapStateToProps)(ManageMemo);

export default WithManageMemo;

