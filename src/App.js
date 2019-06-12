import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import '././css/header_s.css';
import '././css/new-mood-page.css';
import Header from './components/header/header';
import MoodGroup from './components/mood-group/mood-group';

function App() {
  return (
    <Router>
      <div>
        <Header_func />

        <Route exact path="/" component={Home} />
        <Route path="/day" component={Day} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <MoodGroup/>
      <MoodGroup/>
    </div>
  );
}

function Day() {
  return <h2>About</h2>;
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