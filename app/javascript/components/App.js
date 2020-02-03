import React from 'react';
import { Home, Notification, Dashboard, Login } from "grommet-icons";
import { Grommet, Main, RoutedAnchor, Anchor, Header, Footer, Menu, Box, Nav, Button, Grid, Text, Heading } from "grommet";
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
          <Main full="true" background="light-2">
            <Header background="neutral-3" pad="xxsmall" align="end" justify="end">
              <Nav direction="row" gap="small" alignSelf="end" >
                <RouterAnchor icon={< Home color="light-1" />} path="/" hoverIndicator ></RouterAnchor>
                <RouterAnchor icon={< Login color="light-1" />} path="/users/login"  hoverIndicator ></RouterAnchor>
                <RouterAnchor icon={< Dashboard color="accent-4" />} path="/users"  hoverIndicator ></RouterAnchor>
              </Nav>
            </Header>
            <Switch>
              <Route exact path="/" component={HomeContainer}/>
              <Route exact path='/users' component={UserContainer} />
              <Route exact path='/users/login' component={LoginContainer} />
            </Switch>
            <Footer background="neutral-3" pad="small" alignSelf="end" >
              <Text>Copyright ShipMatix 2020</Text>
              <Anchor label="About" color="accent-4" path="/about" />
            </Footer>
          </Main>
        </Grommet>
      </div>
    )
  }
}

export default App
