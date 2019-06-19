import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Day from '../../daily-status/daily'

const propTypes = {
    disabled: PropTypes.bool
}
class CalendarMonth extends React.Component{
    constructor(props){
        super(props);
        this.renderWeeks = this.renderWeeks.bind(this);
    }
    handleClick( weekIndex, weekdayIndex, weekdayDate){
        if(moment() < weekdayDate)
        return;
        this.props.actions.showDetail(weekIndex, weekdayIndex);
    }

}
export default CalendarMonth;