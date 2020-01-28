import React, { Component } from 'react';
import { Main, Box, Grid } from 'grommet';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import { authedUser } from 'components/authActions.js';
import UserInfo from './components/UserInfo.js';
import ShippingRules from './components/ShippingRules.js';
import { updateShippingRules } from 'components/authActions.js';
// import AllUsers from './components/AllUsers.js';

class UserContainer extends Component{
  componentDidMount() {
    this.props.authedUser()
  }

  render() {
    const currentUser = this.props.user
    if (!this.props.loggedIn) {
      return <Redirect to="/users/login"/>
      }
    return(
      <Main>
        <Box pad="medium">
          <Grid
            areas={[
              { name: 'left-side', start: [0, 0], end: [0, 0]},
              { name: 'main', start: [1, 0], end: [1, 0]}
              ]}
            columns={['small', 'auto']}
            rows={['auto']}
            gap="small"
            >
            <Box
              gridArea="left-side"
              background="light-1"
              pad="medium"
            >
              <UserInfo user={this.props.user} authedUser={this.props.authedUser}/>
            </Box>
            <Box
              gridArea="main"
              direction="row"
              alignSelf="start"
              alignContent="stretch"
              background="light-1"
              pad="medium"
              flex="true"
            >
              <ShippingRules
                user={this.props.user}
                shippingRules={this.props.shippingRules}
                updateShippingRules={this.props.updateShippingRules}
              />
            </Box>
          </Grid>
        </Box>
      </Main>
    )
  }
}

const mapStateToProps = state => {
  return {
      user: state.auth.currentUser,
      shippingRules: state.auth.currentUser.shipping_rules,
      loggedIn: state.auth.loggedIn
  }
}

const mapDispatch = dispatch => {
  return {
    updateShippingRules: (shipping_settings) => { dispatch(updateShippingRules(shipping_settings)) },
    authedUser: () => { dispatch(authedUser()) }
  }
}


export default connect(mapStateToProps, mapDispatch)(UserContainer);
