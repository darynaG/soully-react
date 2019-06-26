import React from 'react';
import Group from "../activity/activityGroup";
import MoodGroup from '../mood-group/test'
import StoryEditor from '../../components/story-page/story-editor'
import Footer from '../../components/footer/footer'
import videoClip from '../../assets/video/Nature.mp4';
import {connect} from 'react-redux'

class MoodPage extends React.Component {
    constructor(props) {
        super(props); 
        };
    
    onKeepTrack () {
       // console.log(this.props.mood);
    }
    render (){
    return(    <div>

    <div className="mood-picker">
     <MoodGroup />
     <a href="#activity"> <div className="arrow"></div></a>
     </div> 

     <div id="activity" className="activity-picker">
       <Group />  
       <a href="#story"> <div className="arrow"></div></a>
    </div> 

     <StoryEditor mood= "good" isMin="false"/>

     <video className="video" playsInline autoPlay muted loop id="myVideo">
         <source src={videoClip} type="video/mp4"/>
     </video>

     <button className="round-btn submit-btn" onClick = {(event) => console.log(this.props.mood, this.props.activities)}>Keep track</button>
    </div>
     ); }
}
const mapStateToProps = (state) => {
    
    let activities = state.changeActivity;
    console.log ("activities : ", activities);
    let arr;
    return {
       mood : state.changeMood.mood,
       activities: state.changeActivity
    };
   }
export default connect (mapStateToProps)(MoodPage);