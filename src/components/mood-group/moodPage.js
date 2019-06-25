import React from 'react';
import Group from "../activity/activityGroup";
import MoodGroup from '../mood-group/test'
import StoryEditor from '../../containers/story-editor'
import videoClip from '../../assets/video/Nature.mp4';

const MoodPage = (props) => (
    <div>
     <MoodGroup />
     <Group />
     <StoryEditor mood= "good" isMin="false"/>
     <video className="video" playsInline autoPlay muted loop id="myVideo">
         <source src={videoClip} type="video/mp4"/>
     </video>
    </div>
)

export default MoodPage;