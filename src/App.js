import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import '././css/header_s.css';
import '././css/new-mood-page.css';
import '././css/stories.css'
import '././css/quote.css'
import moment from 'moment';

import Header from './components/header/header';
import StoryBoard from './components/guest-page/storyBord';
import Quote from './components/guest-page/quote'
import StoryLine from './components/story-page/storyline'

import WithMonth from "../src/components/recomendation-page/monthly-log/Demo/containers/WithMonth";

import '././css/daily-log.css';
import '././css/header_s.css';
import '././css/calendar.css';

import '././css/recomendation.css';
import DailyMood from './components/recomendation-page/daily-status/daily';
import Recomendation from './components/recomendation-page/swiper/swiper';
import MoodG from './components/mood-group/test'
import CurrentDay from './components/recomendation-page/daily-status/Day'




function App() {
  return (
    <Router>
      <div>
        <Header_func />


        <Route exact path="/" component={Home} />
        <Route path="/day" component={Day} />

        <Route path="/month" component={Guest} />
       

        <Route path="/mood" component={MoodG} />

      </div>
    </Router>
  );
}

function Guest(){
  return (
  <div>
  <StoryBoard mood="sad" visible='true'/>
 <Quote mood="sad" />
 <StoryLine></StoryLine>
 </div>
  )
}

function Home() {
  return(
     <div>
    </div>
  );
}

function Day() {
  var action=["Running","Water","Sport"];
  var date=moment().format("DD/M/YYYY");
  console.log("date now ",date);
  return(
    <div>
    <div className="recomendation">
    <Recomendation mood="sad" category="books"/>
    <Recomendation mood="sad" category="films"/>
    <Recomendation mood="sad" category="activities"/>
    </div>
    <DailyMood username="Tom" mood="sad" actions={action} date={date}/> 

    <WithMonth />
    <CurrentDay/>
    
    </div>
  );
}
function Month(){
  return (
    <div>
 <StoryBoard/>
   </div>
  );

}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header_func() {
  return (
    <Header/>
  );
}

export default App;