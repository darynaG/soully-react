import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

import '../App.css';
import MoodPage  from '../components/mood-group/moodPage';
import Footer from '../components/footer/footer';
import Day from '../components/Route/Day'
import Month from '../components/Route/Month'
import Test from '../components/Route/test'
import Guest from '../components/Route/Guest'
import StoryPage from '../components/Route/StoryPage'

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components/privateRoute';

import { HomePage } from '../components/HomePage';
import { LoginPage } from '../components/LoginPage';
import { RegisterPage } from '../components/RegisterPage';
import HeaderR from '../components/header/new-header'
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
        <HeaderR/>
        <Route exact path="/" component={Guest} />
        <PrivateRoute exact path="/home" component={MoodPage} />
        <PrivateRoute   exact path="/day" component={Day} />
        <PrivateRoute exact  path="/cabinet" component={Month} />
        <PrivateRoute exact  path="/stories" component={StoryPage} />
        <PrivateRoute exact  path="/month" component={Month} />
       <Route  exact path="/guest" component={Guest} />
       <Route  exact path="/test" component={Test} />
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