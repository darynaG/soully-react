import React from 'react'
import Spinner from 'react-spinner-material';

import { connect } from 'react-redux'

import MoodGroup from '../common/moodGroup'
import StoryBoard from '../../components/guest/storyBoard';
import Quote from '../../components/guest/quote'

import '../../css/newMoodPage.css';
import '../../css/storyInput.css'

import store from '../../store';

import videoClip from '../../assets/video/Nature.mp4';

class Guest extends React.Component {
    render() {
        if (store.getState().dataReducer.loading === true) {
            return (
                <div className="loadingContainer">
                    <Spinner size={120} spinnerColor={"#004d408f"} spinnerWidth={8} visible={true} />
                </div>
            )
        } else
            return (
                <div>
                    <div className="mood-picker">
                        <MoodGroup />
                        <a href="#s"> <div className="arrow"></div></a>
                    </div>
                    <video className="video" playsInline autoPlay muted loop id="myVideo">
                        <source src={videoClip} type="video/mp4" />
                    </video>
                    <div className="container-s add-margin" id="s">
                        <Quote mood={this.props.mood} />
                        <StoryBoard mood={this.props.mood} visible='true' />
                    </div>
                </div>
            )
    }

}

const mapStateToProps = (state) => {

    return {
        mood: state.changeMood.mood,

    }
}
export default (connect)(mapStateToProps)(Guest);