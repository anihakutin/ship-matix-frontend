import React from 'react';
import { Home, Notification, Dashboard, Login } from "grommet-icons";
import { Grommet, RoutedAnchor, Anchor, Header, Menu, Box, Nav, Button, Grid, Text, Heading } from "grommet";
import { grommet } from "grommet/themes";
import { RouterAnchor } from "./user/components/Links";
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
        <Grommet full theme={grommet}>
          <Header background="brand" pad="xxsmall" align="end" justify="end">
            <Nav direction="row" gap="small" alignSelf="end" >
              <RouterAnchor icon={< Home />} path="/" hoverIndicator ></RouterAnchor>
              <RouterAnchor icon={< Login />} path="/users/login"  hoverIndicator ></RouterAnchor>
              <RouterAnchor icon={< Dashboard />} path="/users"  hoverIndicator ></RouterAnchor>
            </Nav>
          </Header>
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path='/users' component={UserContainer} />
            <Route exact path='/users/login' component={LoginContainer} />
          </Switch>
        </Grommet>
      </div>
    )
  }
}

export default App
