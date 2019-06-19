import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CalendarActions from '../actions'
import CalendarMonth from '../components/recomendation-page/monthly-log/Calendar/CalendarMonth'
const mapStateToProps = state => ({
  month: state.calendar.month
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CalendarActions, dispatch)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarMonth)
