import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grommet, Box } from "grommet";
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
  //Status: {this.LoadingMsg()}
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/users" />
    }

    return(
      <Box direction="column" pad="medium" align="center" justify="center">
        <p>
          {this.props.messages.error || this.props.messages.success}
        </p>
        <Box direction="row" pad="medium" align="center"  justify="center" gap="large">
          <LoginForm />
          <SignupForm />
        </Box>
      </Box>
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

export default connect(mapStateToProps)(LoginContainer)
