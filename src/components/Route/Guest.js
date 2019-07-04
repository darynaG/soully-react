import React from 'react'
import MoodGroup from '../mood-group/test'
import StoryBoard from '../guest-page/storyBord';
import Quote from '../guest-page/quote'
import '../../css/new-mood-page.css';
import '../../css/responsible-mood.css'
import '../../css/story-input.css'
import store from '../../store';
import {connect } from 'react-redux'
import Spinner from 'react-spinner-material';
import videoClip from '../../assets/video/Nature.mp4';
import fetchData from '../../actions/actions';
import Messages from '../../data/posts';
import Q from '../../data/quotes';


class Guest extends React.Component{
  

    render() {
        const activities = this.props.users;
        const list=activities.map((activiti) => 
         <li > {activiti['name']} </li>
         );
         console.log("users",this.props.users)
        if(store.getState().dataReducer.loading===true){
       
            return(
                <div className="loadingContainer">
                    <Spinner size={120} spinnerColor={"#004d408f"} spinnerWidth={8} visible={true} />
                </div>
            )
        }else
        return (
        <div>
            <div className="mood-picker">
                <MoodGroup handleClick={()=>Messages.getAllGuest()} initQuotes={()=>Q.getAll()} isGuest={true}/>
                <a href="#s"> <div className="arrow"></div></a>
            </div> 
            <video className="video" playsInline autoPlay muted loop id="myVideo">
                <source src={videoClip} type="video/mp4"/>
             </video>
            <div className="container-s add-margin" id="s">
                <Quote mood={this.props.mood}/>
                <StoryBoard mood={this.props.mood} visible='true'/>
            </div>
            <ul>{list}</ul>
        </div>
        )
    }

}

const mapStateToProps = (state)=>{
 console.log("log",state.dataReducer.users)
    return({
        mood:state.changeMood.mood,
        users:state.dataReducer.users
    })
}
 

export default (connect)(mapStateToProps)(Guest);