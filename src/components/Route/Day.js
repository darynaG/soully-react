import React from 'react'
import DailyMood from '../recomendation-page/daily-status/daily';
import Recomendation from '../recomendation-page/swiper/swiper';
import { connect } from "react-redux";
import '../../css/recomendation.css';
import '../../css/daily-log.css';
import '../../css/containers.css';

import moment from 'moment'

import {DataLoaded,DataLoading} from '../../actions'

class Day extends React.Component{
    
    render() {

        var a=moment().format("DD/M/YYYY")
        
        console.log("USERNAME",this.props.username);
        return (
             <div>
                
                 <div className="scrollRec">
                 <div className = "recomendation">
                     <Recomendation mood = {this.props.mood} category = "books" classL="day_load "/>
                     <Recomendation mood = {this.props.mood} category = "films" classL="day_load hide "/>
                     <Recomendation mood = {this.props.mood} category = "activities" classL="day_load hide "/>
                     </div>
                     <div className="scrollDiv">
                   <a href="#scroll"> <div className ="arrow"></div></a>
                   </div>
                   
                          
                </div>
               
               
                
                    <div id ='scroll' className='scroll'>
                     <DailyMood  username = {this.props.user["username"]} mood = {this.props.mood} activity={this.props.activity}  date = {a}/>
                     </div>
                </div>
        )
    }

}
const mapStateToProps = (state)=>{
    return{
        mood:state.changeMood.mood,
        activity: state.changeActivity,
        user : state.authentication["user"],
        //stories: state.DataLoaded.stories
    }
}
const mapDispatchToProps = {
   
    DataLoading,
    DataLoaded
  
  
  };
export default (connect)(mapStateToProps,mapDispatchToProps)(Day);