import React, { Component } from 'react';
import { Box, Heading } from 'grommet';

export default class Order extends Component{
  render() {
    return(
      <Box border="all">
        <Heading alignSelf="center" level="3">I am an order :)</Heading>
      </Box>
      )
  }
}
