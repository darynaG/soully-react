import React from 'react'
import Calendar from '../monthly-log/monthly-log'
import DailyMood from '../daily-status/daily';
import '../../../css/month.css'
import moment from'moment';
class MonthDetail extends React.Component{
    render(){
        var action=["Running","Water","Sport"];
        return(
            <div className="container">
                <Calendar className="calendarContainer"/>
                <div className="dayContainer">
                <DailyMood  username="Tom" mood="sad" actions={action} date={moment().format('YYYY-MM-DD')}/> 
                </div>
            </div>
        )
    }
}
export default MonthDetail;