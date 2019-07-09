import React from 'react'
import DailyMood from '../../components/recomendation/dailyMood';
import Recomendation from '../recomendation/recomendation';
import { connect } from "react-redux";
import '../../css/recomendation.css';
import '../../css/dailyLog.css'
import '../../css/containers.css';

import moment from 'moment'

import { DataLoaded, DataLoading } from '../../actions/data.actions'

class Day extends React.Component{
   
    render() {
        
        var a=moment().format("YYYY-MM-DD")

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
                    {<div id ='scroll' className='scroll'>
                     <DailyMood  user_id = {this.props.username} mood = {this.props.mood} activity={this.props.activity} date = {'2019-07-08'}/>
                     </div> }
                </div>
        )
    }

}
const mapStateToProps = (state)=>{
    return{
        mood:state.changeMood.mood,
        activity: state.changeActivity,
        posts: state.dataReducer.posts,
        postsPersonal:state.dataReducer.postsPersonal,
        username: state.authentication.user.user.id
    }
}
const mapDispatchToProps = {
   
    DataLoading,
    DataLoaded
  
  
  };
export default (connect)(mapStateToProps,mapDispatchToProps)(Day);