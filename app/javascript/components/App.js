import React from 'react';
import { Home, Notification, ChatOption } from "grommet-icons";
import { Grommet, RoutedAnchor, Anchor, Header, Menu, Box, Nav, Button, Grid, Text, } from "grommet";
import { grommet } from "grommet/themes";
import { RouterAnchor } from "./user/components/links";
// import { withStyles } from '@material-ui/core/styles';
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
      <Header background="brand">
      <Box direction="row" align="center" gap="small">
        <Anchor color="white" href="https://github.com/ShimiSun">
          ShimiSun
        </Anchor>
      </Box>
      <Nav direction="row">
        <RouterAnchor icon={< Home />} path="/" hoverIndicator ></RouterAnchor>
        <RouterAnchor icon={< Notification />} path="/users"  hoverIndicator ></RouterAnchor>
        <RouterAnchor icon={< ChatOption />} path="/"  hoverIndicator ></RouterAnchor>

      </Nav>

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
