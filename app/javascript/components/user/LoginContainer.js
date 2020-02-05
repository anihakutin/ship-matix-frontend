import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Main, Box, Tabs, Tab } from "grommet";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import LoginForm from './components/LoginForm.js';
import SignupForm from './components/SignupForm.js';
import { loginUser, createUser } from 'components/authActions.js';

class LoginContainer extends Component{
  constructor() {
    super()

    this.state = {
      message: ""
    }
  }

  LoadingMsg = () => {
    if (this.props.requesting) {
      return "Logging In"
      } else {
        return ""
      }
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/users/orders" />
    }

    return(
      <Main>
        <Box direction="column" pad="medium" alignSelf="center" align="center" justify="center" full>
          <p>
            {this.props.messages.error || this.props.messages.success}
          </p>
          <Box direction="column" pad="medium" alignSelf="center" justify="start" gap="small" flex>
            <Tabs>
              <Tab title="Login">
                <LoginForm loginUser={this.props.loginUser}/>
              </Tab>
              <Tab title="Sign Up">
                <SignupForm createUser={this.props.createUser}/>
              </Tab>
            </Tabs>
          </Box>
        </Box>
      </Main>
      )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser,
    messages: state.auth,
    requesting: state.auth.requesting,
    loggedIn: state.auth.loggedIn
  }
}

const mapDispatch = dispatch => {
  return {
    loginUser: (email, password) => { dispatch(loginUser(email, password)) },
    createUser: (name, email, password) => { dispatch(createUser(name, email, password)) }
  }
}

export default connect(mapStateToProps, mapDispatch)(LoginContainer)
