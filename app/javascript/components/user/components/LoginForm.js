import React, { Component } from 'react';

export default class LoginForm extends Component{
  constructor() {
    super()

    this.state = {
      l_email: "",
      l_password: ""
    }
  }

  OnTextChange = e => {
    this.setState({
      [e.target.name]: e.target.value
      })
  }

  OnSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    //dispatch login action
  }

  formStyle = {
    padding: '15px',
    display: 'block',
  };

  render() {
    return(
      <div>
        <form onSubmit={this.OnSubmit} style={this.formStyle}>
          <label>Email:</label>
          <input onChange={e => this.OnTextChange(e)} value={this.state.l_email} id="l_email" name="l_email" type="email" />
          <label>Password:</label>
          <input onChange={e => this.OnTextChange(e)} value={this.state.l_password} id="l_password" name="l_password" type="password" />
          <button type="submit">Login</button>
        </form>
      </div>
      )
  }
}
