import React from 'react'
import DailyMood from '../recomendation-page/daily-status/daily';
import Recomendation from '../recomendation-page/swiper/swiper';
import { connect } from "react-redux";
import '../../css/recomendation.css';
import '../../css/daily-log.css';
import '../../css/containers.css';
import Spinner from 'react-spinner-material';
import store from '../../store';
class Day extends React.Component{
    render() {
        // if(store.getState().dataReducer.loading===true){
        //     //console.log("!!!!!!!!!!!loooooading",store.getState().dataReducer.loading);
        //     return(
        //         <div className="loadingContainer">
        //             <Spinner size={120} spinnerColor={"#004d408f"} spinnerWidth={8} visible={true} />
        //         </div>
        //     )}
        //     else
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
                     <DailyMood  username = "Tom" mood = {this.props.mood} activity={this.props.activity} date = '19/6/2019'/>
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
    }
}
export default (connect)(mapStateToProps)(Day);