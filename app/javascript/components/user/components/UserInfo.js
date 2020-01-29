import React, { Component } from 'react';
import { Box, Button, Heading } from 'grommet';

export default class UserInfo extends Component{

  render() {
    return(
      <Box direction="column">
        <Heading level="5">Hello {this.props.user.name}!</Heading>
        <Button type="submit" onClick={this.props.logoutUser} label="Logout"/>
      </Box>
      )
    }
}
