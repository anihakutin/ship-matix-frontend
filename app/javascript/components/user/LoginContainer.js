import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Main, Box } from "grommet";
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
  //Status: {this.LoadingMsg()}
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/users" />
    }

    return(
      <Main>
        <Box direction="column" pad="medium" align="center" justify="center">
          <p>
            {this.props.messages.error || this.props.messages.success}
          </p>
          <Box direction="row" pad="medium" align="center"  justify="center" gap="large">
            <LoginForm loginUser={this.props.loginUser}/>
            <SignupForm createUser={this.props.createUser}/>
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
