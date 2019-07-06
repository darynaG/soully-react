import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

import '../App.css';
import MoodPage from '../containers/common/moodPage';
import Footer from '../components/footer/footer';
import Day from '../containers/route/day'
import Month from '../containers/route/month'
import Guest from '../containers/route/guest'
import StoryPage from '../containers/route/story'

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components/privateRoute';


import { LoginPage } from '../containers/login';
import { RegisterPage } from '../containers/registration';
import HeaderR from '../containers/header/header'



class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }
  render() {
    const { alert } = this.props;
    return (
      <div >
        <Router history={history}>
          <div>
            <HeaderR />
            <Route exact path="/" component={Guest} />
            <PrivateRoute exact path="/home" component={MoodPage} />
            <PrivateRoute exact path="/day" component={Day} />
            <PrivateRoute exact path="/cabinet" component={Month} />
            <PrivateRoute exact path="/stories" component={StoryPage} />
            <PrivateRoute exact path="/month" component={Month} />
            <Route exact path="/guest" component={Guest} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Footer />
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