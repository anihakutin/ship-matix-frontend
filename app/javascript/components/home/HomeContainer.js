import React, { Component } from 'react';
import { Box, Grid, Heading, Main, Text } from "grommet";
import Hero from './components/Hero.js';
import TitleBar from './components/TitleBar.js';
import SectionTimeSavings from './components/SectionTimeSavings.js';

export default class HomeContainer extends Component{
  render() {
    return(
      <Main flex>
        <Box direction="column" pad="small" align="center" alignContents="center" gap="small" full>
          <Hero />
          <SectionTimeSavings />
        </Box>
      </Main>
    )
  }
}
