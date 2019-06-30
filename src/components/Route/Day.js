import React from 'react'
import DailyMood from '../recomendation-page/daily-status/daily';
import Recomendation from '../recomendation-page/swiper/swiper';
import { connect } from "react-redux";
import '../../css/recomendation.css';
import '../../css/daily-log.css';
import '../../css/containers.css';
import Spinner from 'react-spinner-material';
import store from '../../store';
import moment from 'moment'
class Day extends React.Component{
    render() {
        var a=moment().format("DD/M/YYYY")
        return (
             <div>
                 <div className="scrollRec">
                 <div className = "recomendation">
                     <Recomendation mood = {this.props.mood} category = "books"/>
                     <Recomendation mood = {this.props.mood} category = "films"/>
                     <Recomendation mood = {this.props.mood} category = "activities"/>
                     </div>
                     <div className="scrollDiv">
                   <a href="#scroll"> <div className ="arrow"></div></a>
                   </div>
                   
                          
                </div>
               
               
                
                    <div id ='scroll' className='scroll'>
                     <DailyMood  username = "Jack" mood = {this.props.mood} activity={this.props.activity} date = {a}/>
                     </div>
                </div>
        )
    }

}
const mapStateToProps = (state)=>{
    console.log("state", state.changeActivity);
    return{
        mood:state.changeMood.mood,
        activity: state.changeActivity
       // username: state.authentification.username
    }
}
export default (connect)(mapStateToProps)(Day);