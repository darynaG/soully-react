import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '././css/new-mood-page.css';
import '././css/daily-log.css';
import '././css/header_s.css';
import '././css/calendar.css';
import Header from './components/header/header';
import MoodGroup from './components/mood-group/mood-group';
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
  var action=["run","sleep","cry"];
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
>>>>>>> d9be73876569f52c07bb3a6ffbf78faa07f75941
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