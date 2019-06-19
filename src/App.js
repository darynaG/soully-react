import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import soullyApp from './reducers/reducers'
import { addStory, likeStory,setVisibilityFilter,VisibilityFilters} from './actions/actions'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import '././css/header_s.css';
import '././css/new-mood-page.css';
import '././css/stories.css'
import '././css/quote.css'
import '././css/containers.css'
import '././css/story-input.css'
import '././css/button.css'
import Header from './components/header/header';
import MoodGroup from './components/mood-group/mood-group';
import StoryBoard from './components/guest-page/storyBord';
import Quote from './components/guest-page/quote'
import StoryLine from './components/story-page/storyline'
import StoryEdit from './containers/story-editor'

import '././css/daily-log.css';
import '././css/header_s.css';
import '././css/calendar.css';
import DailyMood from './components/recomendation-page/daily-status/daily';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

library.add(faGhost)



function App() {
  return (
    <Router>
      <div>
        <Header_func />
        
        
        <Route exact path="/" component={Home} />
        <Route path="/day" component={Day} />
        <Route path="/month" component={Topics} />
        <Route path="/guest" component={Guest} />
        <Route path="/stories" component={Storypage} />
      </div>
    </Router>
  );
}


function Guest(){
  return (
  <div>
     <MoodGroup/>
     <div className="container add-margin">
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
    <StoryLine></StoryLine>
    </div>
  )
}

function Home() {
  return (
    <div>
      <MoodGroup/>
    </div>
  );
}

function Day() {
  var action=["Running","Water","Sport"];
  return(
    <div>
    <DailyMood username="Tom" mood="sad" actions={action}/> 
    </div>
  );
  // return recomendation page
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
  /*return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );*/

}

export default App;