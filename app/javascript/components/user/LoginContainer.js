import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from './components/LoginForm.js';
import SignupForm from './components/SignupForm.js';

export default class LoginContainer extends Component{
  render() {
    return(
      <div>
        <LoginForm />
        <SignupForm />
      </div>
      )
  }
}
