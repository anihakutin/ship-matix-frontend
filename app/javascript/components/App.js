import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from './home/HomeContainer';
import UserContainer from './user/UserContainer';

class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomeContainer}/>
          <Route exact path='/users' component={UserContainer} />
        </Switch>
      </div>
    )
  }
}

export default App
