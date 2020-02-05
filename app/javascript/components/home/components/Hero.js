import React, { Component } from 'react';
import { Box, Text, Heading, Paragraph, WorldMap } from "grommet";
import { Globe, Robot, Cubes, Next, Print } from "grommet-icons";

export default class Hero extends Component{
  render() {
    return(
      <Box alignSelf="center" direction="column" justify="center" alignContent="stretch" margin="small" pad="small" flex>
        <Box direction="column" justify="center" alignContent="center" pad="small" flex>
          <Globe size="xlarge" />
          <Heading level="1" pad="small" margin="small">Go Global.</Heading>
          <Heading level="3" pad="none" margin="xsmall">Automate your shipping. Expand Your Reach.</Heading>
        </Box>
        <Box alignSelf="center" direction="row" alignContents="center" margin="small" pad="small" flex>
          <Box alignSelf = "center"
          direction="row"
          margin = "small"
          pad = "medium"
          justify="start">
            <Cubes color="light-1" size="xlarge" />
            <Next color="light-1" size="large" />
            <Robot color = "yellow" size = "xlarge" />
            <Next color="light-1" size="large" />
            <Print color="accent-1" size="xlarge" />
          </Box>
        </Box>
      </Box>
      )
  }
}
