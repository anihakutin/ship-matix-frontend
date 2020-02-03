import React from 'react';
import { Home, Notification, Dashboard, Login, UserSettings } from "grommet-icons";
import { Grommet, Main, RoutedAnchor, Anchor, Header, Footer, Menu, Box, Nav, Button, Grid, Text, List, Heading} from "grommet";
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
import OrderContainer from './order/OrderContainer';

class App extends React.Component {
  render () {
    return (
      <div>
        <Grommet full theme={grommet}>
          <Main full="true" background="#15202B">
            <Header pad="xxsmall" align="end" alignContent="end" justify="end" >
              <Nav direction="row" gap="small" alignSelf="end" >
                <RouterAnchor icon={< Home color="light-1"  />} path="/" size="small" ></RouterAnchor>
                <RouterAnchor icon={< Login color="accent-4" />} path="/users/login" size="small" ></RouterAnchor>
                <RouterAnchor icon={< UserSettings color="accent-4" />} path="/users" size="small" ></RouterAnchor>
                <RouterAnchor icon={< Dashboard color="accent-4" />} path="/users/orders" size="small" ></RouterAnchor>
              </Nav>
            </Header>
            <Switch>
              <Route exact path="/" component={HomeContainer}/>
              <Route exact path='/users' component={UserContainer} />
              <Route exact path='/users/login' component={LoginContainer} />
              <Route exact path='/users/orders' component={OrderContainer} />
            </Switch>
            <Footer pad="small" alignSelf="end" >
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
