import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Group from "./activityGroup";
import MoodGroup from './moodGroup'
import StoryEditor from '../../components/stories/storyEditor'

import videoClip from '../../assets/video/Nature.mp4';

import '../../css/newMoodPage.css';
import '../../css/responsibleMood.css';

class MoodPage extends React.Component {
    constructor(props) {
        super(props);
        this.onKeepTrack = this.onKeepTrack.bind(this);
    };

    onKeepTrack(event) {
        return <Redirect to={'/day'} />
    }

    render() {
        return (<div>

            <div className="mood-picker" id="top">
                <MoodGroup />
                <a href="#activity"> <div className="arrow"></div></a>
            </div>

            <div id="activity" className="activity-picker">
                <Group />
                <a href="#story"> <div className="arrow"></div></a>
            </div>

            <StoryEditor mood="good" isMin="false" />

            <video className="video" playsInline autoPlay muted loop id="myVideo">
                <source src={videoClip} type="video/mp4" />
            </video>

            <button className="round-btn submit-btn" onClick={this.onKeepTrack} >Keep track</button>
        </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        mood: state.changeMood.mood,
        activities: state.changeActivity
    };
}

export default connect(mapStateToProps)(MoodPage);