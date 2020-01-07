import React, { Component } from 'react';

export default class AllUsers extends Component{
  state = {
    user: "",
  }

  componentDidMount() {
    fetch('/api/users', {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.qeMrsz-8ADpMzbbmq44lAv1yX930WQfHrtn-efk97U0"
        // Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.j3aYiPd_jGAFftPF6mxAqz6cv3vVApWgLVCsEDMuZ7M"
      }
      })
    .then(response => response.json())
    .then(json => this.setState({ user: json } ))
  }

  renderUser() {
    return(
      <div>
        <p>{this.state.user.name}</p>
        <p>{this.state.user.email}</p>
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.renderUser()}
      </div>
      )
  }
}
