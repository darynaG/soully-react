import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './App.css';
import '././css/header_s.css';
import '././css/new-mood-page.css';
import '././css/stories.css'
import '././css/quote.css'
import '././css/containers.css'
import '././css/story-input.css'
import '././css/button.css'
import '././css/daily-log.css';
import '././css/header_s.css';
import '././css/calendar.css';
import '././css/recomendation.css';
import '././css/responsible-mood.css'

import videoClip from './assets/video/Nature.mp4';

import Header from './components/header/header';
import StoryBoard from './components/guest-page/storyBord';
import Quote from './components/guest-page/quote'
import WithMonth from "../src/containers/WithMonth";
import DailyMood from './components/recomendation-page/daily-status/daily';
import Recomendation from './components/recomendation-page/swiper/swiper';
import MoodPage  from './components/mood-group/moodPage';
import MoodGroup from './components/mood-group/test'
import StoryEdit from './containers/story-editor'
import PostsWithLikes from './containers/LikedStoryline'

//const store = createStore(reducer);


function App () {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={MoodPage} />
        <Route path="/day" component={Day} />
        <Route path="/guest" component={Guest} />
        <Route path="/stories" component={Storypage} />
        <Route path="/month" component={Guest} />

      </div>
    </Router>
  );
}


function Guest (){
  return (
  <div>

     <MoodGroup />
    <div>
    <Quote mood="sad" />
    <StoryBoard mood="sad" visible='true'/>
    </div>

 </div>
  )
}

function Storypage(){
  return(
    <div>
    <StoryEdit></StoryEdit>
    <PostsWithLikes/>
    </div>
  )
}

function Day () {
 
  return(
    <div>
    <div className = "recomendation">
      <Recomendation mood = "sad" category = "books"/>
      <Recomendation mood = "sad" category = "films"/>
      <Recomendation mood = "sad" category = "activities"/>
    </div>

    <DailyMood username = "Tom" mood = "sad" date = '19/6/2019'/> 
    <WithMonth />

    </div>
  );
}


function Month (){

  return (
    <div>
      <StoryBoard/>
   </div>
  );

}

export default App;