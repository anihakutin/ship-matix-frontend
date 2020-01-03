import React, { Component } from 'react';

export default class AllUsers extends Component{
  state = {
    users: [],
  }

  componentDidMount() {
    fetch('/api/users')
    .then(response => response.json())
    .then(json => this.setState({ users: json.users } ))
  }

  renderUsers() {
    return(
      <ul>
        {this.state.users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    )
  }

  render() {
    return(
      <div>
        {this.renderUsers()}
      </div>
      )
  }
}
