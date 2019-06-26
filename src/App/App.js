import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

import '../App.css';
import '../../src/css/header-responsible.css'

import Header from '../components/header/header';
import MoodPage  from '../components/mood-group/moodPage';
import Footer from '../components/footer/footer';
import Day from '../components/Route/Day'
import Month from '../components/Route/Month'
import Guest from '../components/Route/Guest'
import StoryPage from '../components/Route/StoryPage'

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components/privateRoute';

import { HomePage } from '../components/HomePage';
import { LoginPage } from '../components/LoginPage';
import { RegisterPage } from '../components/RegisterPage';

import videoClip from '../assets/video/Nature.mp4';


class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
    });
}
  render(){
      const { alert } = this.props;
return (
  <div >
        
                        
    <Router history={history}>
      <div>
        <Header/>
        <PrivateRoute exact path="/" component={HomePage} />
        <Route exact path="/home" component={MoodPage} />
        <Route exact path="/day" component={Day} />
        <Route exact path="/guest" component={Guest} />
        <Route exact path="/stories" component={StoryPage} />
        <Route exact path="/month" component={Month} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Footer/>
      </div>
    </Router> 
   
  </div>);
  }
}
function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 