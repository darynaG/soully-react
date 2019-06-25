import React from 'react';
import Group from "../activity/activityGroup";
import MoodGroup from '../mood-group/test'
import StoryEditor from '../../containers/story-editor'
import Footer from '../../components/footer/footer'
import videoClip from '../../assets/video/Nature.mp4';

const MoodPage = (props) => (
    <div>

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
     <Footer/>
    </div>
)

export default MoodPage;