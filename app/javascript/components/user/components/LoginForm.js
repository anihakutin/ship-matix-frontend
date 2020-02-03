import React, { Component } from 'react';
import { Box, TextInput, MaskedInput, Form, Heading, FormField, Button } from 'grommet';
import { FormLock } from "grommet-icons";

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
      <Box alignSelf="center" alignContent="center" justify="center">
        <Heading alignSelf="center" level="3">Sign In Below</Heading>
        <Form onSubmit={this.OnSubmit} > 
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
          <Box pad="small">
              <Button alignSelf="center" reverse="true" align type="submit" icon={< FormLock />} label="Login"/>
          </Box>
        </Form>
      </Box>
      )
  }
}

export default LoginForm;
