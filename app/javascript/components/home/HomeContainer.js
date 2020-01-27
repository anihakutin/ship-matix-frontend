import React, { Component } from 'react';
import { Grommet, Box, Grid, Text, Heading } from "grommet";
import TitleBar from './components/TitleBar.js';

export default class HomeContainer extends Component{
  render() {
    return(
      <Box pad="medium">
        <TitleBar />
      </Box>
    )
  }
}
