import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, TextInput, MaskedInput, Form, Heading, FormField, Button } from 'grommet';
import { FormLock } from "grommet-icons";
import { loginUser } from 'components/authActions.js';

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

  render() {
    return(
      <Box alignSelf="start" justify="start">
        <Form onSubmit={this.OnSubmit} >
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
      </Box>
      )
  }
}

const mapDispatch = dispatch => {
  return {
    loginUser: (email, password) => { dispatch(loginUser(email, password)) }
  }
}

export default connect(null, mapDispatch)(LoginForm)
