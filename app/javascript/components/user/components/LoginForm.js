import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from 'components/authActions.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";


class LoginForm extends Component{
  constructor() {
    super()

    this.state = {
      login_email: "",
      login_password: "",
      message: ""
    }
  }

  OnTextChange = e => {
    this.setState({
      [e.target.name]: e.target.value
      })
  }

  OnSubmit = e => {
    const { email, password } = this.state
    e.preventDefault()
    this.props.loginUser(this.state.login_email, this.state.login_password)
  }

  LoadingMsg = () => {
    if (this.props.requesting) {
      return "Logging In"
      } else {
        return ""
      }
  }

  formStyle = {
    padding: '15px',
    display: 'block',
  };

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/users" />
    }
    return(
      <div>
        <form onSubmit={this.OnSubmit} style={this.formStyle}>
          <label>Email:</label>
          <input onChange={e => this.OnTextChange(e)} value={this.state.login_email} id="login_email" name="login_email" type="email" />
          <label>Password:</label>
          <input onChange={e => this.OnTextChange(e)} value={this.state.login_password} id="login_password" name="login_password" type="password" />
          <button type="submit">Login</button>
        </form>
        <p>Status: {this.LoadingMsg()}</p>
        <p>Result: {this.props.messages.error || this.props.messages.success}</p>
      </div>
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
    loginUser: (email, password) => { dispatch(loginUser(email, password)) }
  }
}

export default connect(mapStateToProps, mapDispatch)(LoginForm)
