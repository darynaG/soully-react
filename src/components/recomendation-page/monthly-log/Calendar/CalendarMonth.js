import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Day from '../../daily-status/daily'

const propTypes = {
    disabled: PropTypes.bool
}
class CalendarMonth extends React.Component {
    constructor(props) {
        super(props);
        this.renderWeeks = this.renderWeeks.bind(this);
    }
    handleDoubleClick( weekIndex, weekdayIndex, weekdayDate){
        if(moment() < weekdayDate)
        return;
        this.props.actions.showDetail(weekIndex, weekdayIndex);
    }
    getDayClass (day) {
        const today = moment();
        const classes = ['week_day'];
        if(today.isSame(day, 'd')){
            classes.push('week_day--today');
        } 
        if(today < day){
            classes.push('week_day--past');
        }
        if(today > day){
            classes.push('week_day--future')
        }
        if(day.day() === 0 || day.day() === 6 ){
            classes.push('week_day--weekend');
        }
        return classes.join(' ');
    }
    renderWeeks(week, index){
        const { month, actions } =this.props;
        /*
        return month.map((week, index) => (
            <div key={week.date} className='week'>
            {week.days.map((weekday, index) => (
              <div
                key={weekday.date}
                className={this.getDayClass(weekday.date)}
                onDoubleClick={() => this.handleDoubleClick(week.index, weekday.index, weekday.date)}
              >
                {weekday.date.format('D')}
                {weekday.day_logs.map((day) => (
                  <Day
                    key={day.date}
                    day={day}
                    weekIndex={week.index}
                    weekdayIndex={weekday.index}
                    showDetail={actions.showDetail}
   
                  />
                ))}
              </div>
            ))}
          </div>
        ))
*/
    }

    render () {
      return (
        <div className='calendar__month'>
          {this.renderWeeks()}
        </div>
      )
    }
  }
  
  CalendarMonth.propTypes = propTypes
  
  export default CalendarMonth