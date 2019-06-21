import React from 'react';
import Group from "../activity/activityGroup";
import MoodGroup from '../mood-group/test'
import StoryEditor from '../../containers/story-editor'


const MoodPage = (props) => (
    <div>
     <MoodGroup />
     <Group />
     <StoryEditor mood= "good"/>
    </div>
)

export default MoodPage;