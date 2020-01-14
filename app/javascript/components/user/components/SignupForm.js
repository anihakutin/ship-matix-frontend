import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from 'components/authActions.js';

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

  formStyle = {
    padding: '15px',
    display: 'block'
  };

  render() {
    return(
      <div>
        <form autoComplete="new-password" onSubmit={this.OnSubmit} style={this.formStyle}>
          <label>Name:</label>
          <input onChange={e => this.OnTextChange(e)} value={this.state.signup_name} id="signup_name" name="signup_name" type="text" />
          <label>Email:</label>
          <input onChange={e => this.OnTextChange(e)} value={this.state.signup_email} id="signup_email" name="signup_email" type="email" />
          <label>Password:</label>
          <input onChange={e => this.OnTextChange(e)} value={this.state.signup_password} id="signup_password" name="signup_password" type="password" autoComplete="new-password" />
          <button type="submit">Signup</button>
        </form>
      </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatch = dispatch => {
  return {
    createUser: (name, email, password) => { dispatch(createUser(name, email, password)) }
  }
}

export default connect(mapStateToProps, mapDispatch)(SignupForm)
