import React from 'react'
import DailyMood from '../recomendation-page/daily-status/daily';
import Recomendation from '../recomendation-page/swiper/swiper';
import { connect } from "react-redux";
import '../../css/recomendation.css';
import '../../css/daily-log.css';
import '../../css/containers.css'
class Day extends React.Component{
    render() {
        return (
             <div>
                 <div className = "recomendation">
                     <Recomendation mood = {this.props.mood} category = "books"/>
                     <Recomendation mood = {this.props.mood} category = "films"/>
                     <Recomendation mood = {this.props.mood} category = "activities"/>
                </div>
                     <DailyMood  username = "Tom" mood = "sad" date = '19/6/2019'/>
                </div>
        )
    }

}
const mapStateToProps = (state)=>{
    return{
        mood:state.changeMood.mood
    }
}
export default (connect)(mapStateToProps)(Day);