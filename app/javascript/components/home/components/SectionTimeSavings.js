import React, { Component } from 'react';
import { Box, Text, Heading, Paragraph, WorldMap, Clock } from "grommet";

export default class SectionTimeSavings extends Component{
  render() {
    return(
      <Box alignSelf="center" align="center" margin="small">
        <Heading level="3">Time Is Your Most Valuable Asset</Heading>
        <Clock type="digital" />
      </Box>
    )
  }
}
