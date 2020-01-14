import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomeContainer from './home/HomeContainer';
import UserContainer from './user/UserContainer';
import LoginContainer from './user/LoginContainer';

class App extends React.Component {
  render () {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users/login">Login</Link>
            </li>
            <li>
              <Link to="/users">User Dashboard</Link>
            </li>

          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path='/users' component={UserContainer} />
          <Route exact path='/users/login' component={LoginContainer} />
        </Switch>
      </div>
    )
  }
}

export default App
