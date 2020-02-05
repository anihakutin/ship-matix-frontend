import React, { Component } from 'react';
import { Box, Grid, Heading, Main, Text } from "grommet";
import Hero from './components/Hero.js';
import TitleBar from './components/TitleBar.js';
import SectionTimeSavings from './components/SectionTimeSavings.js';

export default class HomeContainer extends Component{
  render() {
    return(
      <Main>
        <Box direction="column" flex pad="small" align="center" alignContents="center" gap="small">
          <Hero />
          <SectionTimeSavings />
        </Box>
      </Main>
    )
  }
}
