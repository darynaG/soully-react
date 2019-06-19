import React from 'react';
import '../../../css/calendar.css';
import moment from 'moment';


class Calendar extends React.Component{
    state={
        dateContext:moment(),
        showMonthPopup:false,
        showYearPopup:false,
        selectedDay:null
    }
    constructor(props){
        super(props);

    }
    weekdays=moment.weekdays();
    weekdaysShort=moment.weekdaysShort();
    months=moment.months();
    year=()=>{
        return this.state.dateContext.format("Y");
    }
    month=()=>{
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth=()=>{
        return this.state.dateContext.daysInMonth();
    }
    currentDate=()=>{
        console.log("currentDate:"+this.state.dateContext.get("date"));
        return this.state.dateContext.get("date");
    }
    firstDayOfMonth=()=>{
        let dateContext=this.state.dateContext;
        let firstDay=moment(dateContext).startOf('month').format('d');
        return firstDay;
    }
    setMonth=(month)=>{
        let monthNumber=this.months.indexOf(month);
        let dateContext=Object.assign({},this.state.dateContext);
        dateContext=moment(dateContext).set("month",monthNumber);
        this.setState({
            dateContext:dateContext
        });
    }
    nextMonth=()=>{
        let dateContext=Object.assign({},this.state.dateContext);
        dateContext=moment(dateContext).add(1,"month");
        this.setState({
            dateContext:dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth();

    }
    prevMonth=()=>{
        let dateContext=Object.assign({}, this.state.dateContext);
        dateContext=moment(dateContext).subtract(1,"month");
        this.setState({
            dateContext:dateContext

        });
        this.props.onPrevMonth && this.props.onPrevMonth();
    }
    onSelectChange=(e,data)=>{
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();

    }
    SelectList=(props)=>{
        let popup=props.data.map((data)=>{
            return(
                <div ley={data}>
                    <a  onClick={(e)=>{this.onSelectChange(e,data)}}>
                        {data}
                    </a>
                </div>

            );
        });
        return(
            <div className="month-popup">
                {popup}
            </div>

        );
    }
    onChangeMonth=()=>{
        this.setState({
            showMonthPopup:!this.state.showMonthPopup
        });
    }
    MonthNav=()=>{
        return(
            <span className="label-month" 
            onClick={(e)=>{this.onChangeMonth(e, this.month())}}>
                {this.month()}
                {this.state.showMonthPopup &&
                <this.SelectList data={this.months}></this.SelectList>
                }

            </span>
        );
    }
    showYearEditor=()=>{
        this.setState({
            showYearNav:true
        });
    }
    setYear=(year)=>{
        let dateContext=Object.assign({},this.state.dateContext);
        dateContext=moment(dateContext).set('year',year);
        this.setState({
            dateContext:dateContext
        });
    }
    onYearChange=(e)=>{
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    }
    onKeyUpYear=(e)=>{
        if(e.which ===13 || e.which===27){
            this.setYear(e.target.value);
            this.setState({
                showYearNav:false
            });
        }
    }
    yearNav=()=>{
        return(
            this.state.showYearNav?
            <input
            defaultValue={this.year()}
            className='editor-year'
            ref={(yearInput)=>{this.yearInput=yearInput}}
            onKeyUp={(e)=>this.onKeyUpYear(e)}
            onChange={(e)=>this.onYearChange(e)}
            type="number"
            placeholder="year"/>
            :
            <span className="label-year" onDoubleClick={(e)=>this.showYearEditor()}>
                {this.year()}
            </span>

        );
    }
    onDayClick=(e,day)=>{
        this.setState({
            selectedDay:day
        },
        ()=>{
            console.log("selected day: ", this.setState.selectedDay);
        });
        this.props.onDayClick && this.props.onDayClick(e,day);
    }

    render(){
        let weekdays=this.weekdaysShort.map((day)=>{
            return(
                <td key={day}className="week-day">{day}</td>
            )
        });
        let blanks=[];
        for(let i=0;i<this.firstDayOfMonth();i++){
            blanks.push(<td key={i*80} className="emptySlot">{" "}</td>);
        }
        console.log("blanks: ", blanks);
        let daysInMonth=[];
        for(let j=1;j<this.daysInMonth();j++){
            let className=(j==this.currentDate()?"day current-day":"day");
            let selectedClass=(j==this.state.selectedDay? "selected-day":"")
            daysInMonth.push(
                <td key={j} className={className+" "+selectedClass}>
                    <span onClick={(e)=>{this.onDayClick(e,j)}}>
                        {j}
                    </span>
                </td>
            );
        }
        console.log("days: ", daysInMonth);
        var totalSlots=[...blanks,...daysInMonth];
        let rows=[];
        let cells=[];
        totalSlots.forEach((row,i)=>{
            if((i%7)!==0){
                cells.push(row);
            }else{
                let insertRow=cells.slice();
                rows.push(insertRow);
                cells=[];
                cells.push(row);
            }
            if(i==totalSlots.length-1){
                let inserRow=cells.slice();
                rows.push(inserRow);
            }
        });
        let trElem=rows.map((j,i)=>{
            return(
                <tr >
                    {j}
                </tr>
            );
        })



        return(
            <div className="calendar-container" >
                <table className="calendar">
                    <thead>
                        <tr className="calendar-header">
                            <td colSpan="5">
                                <this.MonthNav/>
                                {" "}
                                <this.yearNav />
                            </td>
                           
                            <td colSpan="2" className="nav-month">
                                <i className="prev"
                                onClick={(e)=>{this.prevMonth()}}>&#8592;</i>
                                <i className="next "
                                onClick={(e)=>{this.nextMonth()}}>&#8594;</i>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {weekdays}
                        </tr>
                        {trElem}
                    </tbody>
                
                </table>
                
            </div>
        );
    }
}
export default Calendar;