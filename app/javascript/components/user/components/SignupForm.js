import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Box, TextInput, MaskedInput, Form, Heading, FormField, Button } from 'grommet';
import { Launch } from "grommet-icons";

class SignupForm extends Component{
  constructor() {
    super()

    this.state = {
      signup_name: "",
      signup_email: "",
      signup_password: "",
    }
  }

  OnTextChange = e => {
    this.setState({
      [e.target.name]: e.target.value
      })
  }

  OnSubmit = e => {
    const { signup_name, signup_email, signup_password } = this.state
    e.preventDefault()
    this.props.createUser(signup_name, signup_email, signup_password)
  }


  render() {
    return(
      <Box alignSelf="center" alignContent="center" justify="center">
        <Heading alignSelf="center" level="3"> Sign Up Below </Heading>
        <Form onSubmit={this.OnSubmit} >
          <FormField label="Name">
            <TextInput
              onChange={e => this.OnTextChange(e)}
              value={this.state.signup_name}
              id="signup_name"
              name="signup_name"
              type="text"
              required={true}
            />
          </FormField>
          <FormField label="Email">
            <TextInput
              onChange={e => this.OnTextChange(e)}
              value={this.state.signup_email}
              id="signup_email"
              name="signup_email"
              type="email"
              required={true}
            />
          </FormField>
          <FormField label="Password">
            <TextInput
              onChange={e => this.OnTextChange(e)}
              value={this.state.signup_password}
              id="signup_password"
              name="signup_password"
              type="password"
              required={true}
            />
          </FormField>
          <Box pad="small">
            <Button alignSelf="center" reverse={true} type="submit" icon={< Launch />} label="Signup" />
          </Box>
        </Form>
      </Box>
      )
  }
}

// const mapDispatch = dispatch => {
//   return {
//     createUser: (name, email, password) => { dispatch(createUser(name, email, password)) }
//   }
// }

export default SignupForm;
