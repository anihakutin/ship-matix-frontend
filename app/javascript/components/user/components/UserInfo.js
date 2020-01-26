import React, { Component } from 'react';

export default class UserInfo extends Component{

  render() {
    return(
      <div>
        <h3>Hello {this.props.user.name}!</h3>
      </div>
      )
    }
}
