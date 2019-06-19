import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import soullyApp from './reducers/reducers'
import { addStory, likeStory,setVisibilityFilter,VisibilityFilters} from './actions/actions'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import moment from 'moment';
import reducer from './reducers'

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

import videoClip from './assets/video/Nature.mp4';

import Header from './components/header/header';
import StoryBoard from './components/guest-page/storyBord';
import Quote from './components/guest-page/quote'
import StoryLine from './components/story-page/storyline'
import StoryEdit from './containers/story-editor'
import DailyMood from './components/recomendation-page/daily-status/daily';
import Recomendation from './components/recomendation-page/swiper/swiper';
import MonthDetail from './components/recomendation-page/monthly-log/month-container';
import MoodGroup from './components/mood-group/test'

const store = createStore(reducer);


function App () {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={MoodGroup} />
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
    <div className="container add-margin">
    <Quote mood="sad" />
    <StoryBoard mood="sad" visible='true'/>
    </div>

 </div>
  )
}

function Storypage (){
  return(
    <div>
    <StoryEdit></StoryEdit>
    <StoryLine></StoryLine>
    </div>
  )
}

function Day () {
  var action=["Running","Water","Sport"];
  var date=moment().format("YYYY-MM-DD");
  console.log("date now ",date);
  return(
    <div>
    <div className="recomendation">
    <Recomendation mood="sad" category="books"/>
    <Recomendation mood="sad" category="films"/>
    <Recomendation mood="sad" category="activities"/>
    </div>
    <DailyMood username="Tom" mood="sad" actions={action} date={date}/> 

    <MonthDetail/>
    </div>
  );
  // return recomendation page
}

function Month (){
  return (
    <div>
 <StoryBoard/>
   </div>
  );

}

export default App;