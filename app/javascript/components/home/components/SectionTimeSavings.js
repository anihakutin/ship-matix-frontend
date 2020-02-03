import React, { Component } from 'react';
import { Box, Text, Heading, Paragraph, WorldMap, Clock } from "grommet";

export default class SectionTimeSavings extends Component{
  render() {
    return(
      <Box alignSelf="center" align="center" margin="small">
        <Heading level="4">Save Valuable Employee Time. Increase Productivity.</Heading>
        <Clock type="digital" />
      </Box>
    )
  }
}
