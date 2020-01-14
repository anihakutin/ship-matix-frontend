import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserInfo from './components/UserInfo.js';
// import AllUsers from './components/AllUsers.js';

export default class UserContainer extends Component{
  render() {
    return(
      <div>
        <UserInfo />
      </div>
    )
  }
}
