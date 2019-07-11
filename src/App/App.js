import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { connect } from 'react-redux';

import '../App.css';
import MoodPage from '../containers/route/moodPage';
import Footer from '../components/footer/footer';
import Day from '../containers/route/day'
import Month from '../containers/route/month'
import Guest from '../containers/route/guest'
import StoryPage from '../containers/route/story'

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components/privateRoute';

import { LoginPage } from '../containers/route/login';
import { RegisterPage } from '../containers/route/registration';
import Header from '../containers/header/header'

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {

      dispatch(alertActions.clear());
    });
  }
  render() {
    return (
      <div >
        <Router history={history}>
          <div>
            <Header />
            <Route exact path="/" component={Guest} />
            <Route exact path="/home" component={MoodPage} />
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