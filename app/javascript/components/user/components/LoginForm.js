import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, TextInput, MaskedInput, Form, Heading, FormField, Button } from 'grommet';
import { FormLock, View } from "grommet-icons";
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
    // <FormField name="name" label="Name" />
    // <Button type="submit" primary label="Submit" />
    // <FormField onChange={e => this.OnTextChange(e)} value={this.state.login_email} id="login_email" name="login_email" type="email" label="Email" />
    return(
      <Box alignSelf="center" justify="start">

        <Form onSubmit={this.OnSubmit} style={this.formStyle} >
          <Heading level="3">Sign In Below</Heading>
          <FormField label="Email" >
            <MaskedInput
              mask={[
                {
                  regexp: /^[\w\-_.]+$/,
                  placeholder: "example"
                },
                { fixed: "@" },
                {
                  regexp: /^[\w]+$/,
                  placeholder: "my"
                },
                { fixed: "." },
                {
                  regexp: /^[\w]+$/,
                  placeholder: "com"
                }
              ]}
              id="login_email"
              name="login_email"
              value={this.state.login_email}
              onChange={e => this.OnTextChange(e)}
              required={true}
            />
          </FormField>
          <FormField
            onChange={e => this.OnTextChange(e)}
            value={this.state.login_password}
            id="login_password"
            name="login_password"
            label="Password"
            type="password"
            required={true}
          />
          <Button type="submit" icon={< FormLock />} label="Login"/>
        </Form>
        <p>Status: {this.LoadingMsg()}</p>
        <p>Result: {this.props.messages.error || this.props.messages.success}</p>
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

const mapDispatch = dispatch => {
  return {
    loginUser: (email, password) => { dispatch(loginUser(email, password)) }
  }
}

export default connect(mapStateToProps, mapDispatch)(LoginForm)
