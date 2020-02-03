import React, { Component } from 'react';
import { Grommet, Box, Grid, Text, Heading } from "grommet";
import Hero from './components/Hero.js';
import TitleBar from './components/TitleBar.js';
import SectionTimeSavings from './components/SectionTimeSavings.js';

export default class HomeContainer extends Component{
  render() {
    return(
      <Box direction="column" full="true" pad="none" align="center" alignContents="center" gap="small">
        <Hero />
        <SectionTimeSavings />
      </Box>
    )
  }
}
