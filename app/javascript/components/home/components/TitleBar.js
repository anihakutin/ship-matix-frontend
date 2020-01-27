import React, { Component } from 'react';
import { Grommet, Box, Grid, Text, Heading } from "grommet";

export default class TitleBar extends Component{
  render() {
    return(
      <Heading margin="none" level="4">
        Not very fancy but you may consider me your shiny new home page!(for now...)
      </Heading>
      )
  }
}
