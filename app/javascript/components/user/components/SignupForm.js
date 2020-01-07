import React, { Component } from 'react';

export default class SignupForm extends Component{
  constructor() {
    super()

    this.state = {
      s_name: "",
      s_email: "",
      s_password: "",
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
    display: 'block'
  };

  render() {
    return(
      <div>
        <form onSubmit={this.OnSubmit} style={this.formStyle}>
          <label>Name:</label>
          <input onChange={e => this.OnTextChange(e)} value={this.state.s_name} id="s_name" name="s_name" type="text" />
          <label>Email:</label>
          <input onChange={e => this.OnTextChange(e)} value={this.state.s_email} id="s_email" name="s_email" type="email" />
          <label>Password:</label>
          <input onChange={e => this.OnTextChange(e)} value={this.state.s_password} id="s_password" name="s_password" type="password" />
          <button type="submit">Signup</button>
        </form>
      </div>
      )
  }
}
