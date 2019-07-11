import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

import Group from "./activityGroup";
import MoodGroup from './moodGroup'
import StoryEditor from '../../components/stories/storyEditor'

import videoClip from '../../assets/video/Nature.mp4';

import '../../css/newMoodPage.css';
import '../../css/responsibleMood.css';
import UserData from '../../data/userData';

class MoodPage extends React.Component {
    constructor(props) {
        super(props);
        this.onKeepTrack = this.onKeepTrack.bind(this);
        
    };
    

    onKeepTrack(event) {
        //
        var s = this.props.activities;
          var act = [];
          var arr = Object.keys(s);
          
          for (var i=0; i<arr.length; ++i)
            {
              if(s[arr[i]] === true)
                {
                  act.push(arr[i]);
                }
            }
        //
        var userdata = {
            //user_id: this.props.user['id'],
            userId: this.props.user.user['id'],
            mood: this.props.mood,
            date: moment().format("YYYY-MM-DD"),
            activities: act
        }
        
        console.log('USER DATA',userdata)
        //console.log('USER ID',userdata['userId'])
        UserData.postData(userdata);
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

            <StoryEditor isMin ={false} user={this.props.user}/>

            <video className="video" playsInline autoPlay muted loop id="myVideo">
                <source src={videoClip} type="video/mp4" />
            </video>

            <button className="round-btn submit-btn" onClick={this.onKeepTrack} >Keep track</button>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
   
    //console.log(state.authentication['user'])
    return {
        mood: state.changeMood.mood,
        activities: state.changeActivity,
        user: state.authentication.user
    };
}

export default connect(mapStateToProps)(MoodPage);