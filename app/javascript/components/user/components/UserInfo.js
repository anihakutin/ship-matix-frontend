import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authedUser } from 'components/authActions.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

class UserInfo extends Component{

  componentDidMount() {
    this.props.authedUser()
  }

  render() {
    const currentUser = this.props.user
    if (!currentUser) {
      return <Redirect to="/users/login"/>
        }
    //console.log(this.props.user)
    return(
    <div>
      <h3>Hello {this.props.user.name}!</h3>
    </div>
    )
    }
}

  const mapStateToProps = state => {
    return {
      user: state.auth.currentUser
    }
  }

  const mapDispatch = dispatch => {
    return {
      authedUser: () => { dispatch(authedUser()) }
    }
  }


export default connect(mapStateToProps, mapDispatch)(UserInfo)
