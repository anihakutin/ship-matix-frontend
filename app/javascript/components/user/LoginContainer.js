import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grommet, Box } from "grommet";

import LoginForm from './components/LoginForm.js';
import SignupForm from './components/SignupForm.js';

export default class LoginContainer extends Component{
  render() {
    return(
      <Box direction="column" pad="medium" align="center"  justify="start">
        <LoginForm />
        <SignupForm />
      </Box>
      )
  }
}
