import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
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
    if (!currentUser) {
      return <Redirect to="/users/login"/>
      }
    return(
      <div>
        <UserInfo user={this.props.user} authedUser={this.props.authedUser}/>
        <ShippingRules
          user={this.props.user}
          shippingRules={this.props.shippingRules}
          updateShippingRules={this.props.updateShippingRules}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      user: state.auth.currentUser,
      shippingRules: state.auth.currentUser.shipping_rules
  }
}

const mapDispatch = dispatch => {
  return {
    updateShippingRules: (shipping_settings) => { dispatch(updateShippingRules(shipping_settings)) },
    authedUser: () => { dispatch(authedUser()) }
  }
}


export default connect(mapStateToProps, mapDispatch)(UserContainer);
