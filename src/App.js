import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import '../src/css/header-responsible.css'

import Header from './components/header/header';
import MoodPage  from './components/mood-group/moodPage';
import Footer from '../src/components/footer/footer';
import Day from '../src/components/Route/Day'
import Month from '../src/components/Route/Month'
import Guest from '../src/components/Route/Guest'
import StoryPage from '../src/components/Route/StoryPage'

import videoClip from './assets/video/Nature.mp4';


class App extends React.Component {
  render(){
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={MoodPage} />
        <Route exact path="/day" component={Day} />
        <Route exact path="/guest" component={Guest} />
        <Route exact path="/stories" component={StoryPage} />
        <Route exact path="/month" component={Month} />
        <Footer/>
      </div>
    </Router>
  );
  }
}
export default App;
