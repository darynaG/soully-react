import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    currentMonthTitle: PropTypes.string.isRequired,
    nextMonthAction: PropTypes.func.isRequired,
    prevMonthAction: PropTypes.func.isRequired
}

function CalendarNav ({ currentMonthTitle, nextMonthAction, prevMonthAction}){
    return (
        <div className = 'calendar_nav'>
            <button onClick = {prevMonthAction}>&#8592;</button>
            <h2>
                {currentMonthTitle}
            </h2>
            <button onClick = {nextMonthAction}>&#8594;</button>
        </div>
    )
}
CalendarNav.propTypes = propTypes;
export default CalendarNav;