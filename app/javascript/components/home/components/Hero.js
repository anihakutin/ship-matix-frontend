import React, { Component } from 'react';
import { Box, Text, Heading, Paragraph, WorldMap } from "grommet";

export default class Hero extends Component{
  render() {
    return(
      <Box alignSelf="center" direction="column" full="true" alignContent="stretch">
        <Box direction="column">
          <Heading level="2" pad="none" margin="xsmall">Go Global.</Heading>
          <Heading level="4" pad="none" margin="xsmall">Automate your shipping. Expand Your Reach.</Heading>
        </Box>
        <Box alignSelf="center" alignContents="center" margin="small" pad="small">
          <WorldMap
            color="neutral-3"
            continents={[
              {
                name: 'North America',
                color: 'light-4'
              },
            ]}
            onSelectPlace={(lat, lon) => {}}
            places={[
              {
                name: 'NYC',
                location: [40.7128, -74.0060],
                color: 'accent-2',
              },
            ]}
            selectColor="accent-2"
          />
        </Box>
      </Box>
      )
  }
}
