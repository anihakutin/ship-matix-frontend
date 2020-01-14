import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authedUser } from 'components/authActions.js';

class AllUsers extends Component{

  componentDidMount() {
    this.props.authedUser()
  }

  renderUser() {
    const { name, email } = this.props.user
    return(
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    )
  }

  render() {
    const currentUser = this.props.currentUser
    console.log(this.props.state)
    if (currentUser) {
      return (
        <div>
          {this.renderUser()}
        </div>
      )
    }
    return (
      <div>
        <h2>{this.props.error}</h2>
        {/* <Redirect to='/users/login' /> */}
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
    authedUser: () => { dispatch(authedUser()) }
  }
}

export default connect(mapStateToProps, mapDispatch)(AllUsers)
