import React from 'react'
import { grabImage } from "../../lib/sanityClient";
import { Avatar, Title, Text, Grid, GridCol } from '@mantine/core';



export const LandingScreen = async ({ landingInfo }: {
  landingInfo: {
    backgroundImage: object,
    statement: string,
    visartsIcon: object,
    title: string
  },

}) => {


  return (
    <div style={{ backgroundImage: `url(${grabImage(landingInfo.backgroundImage)})`, backgroundSize: 'cover', height: '86vh', position: 'relative' }}>
      <div style={{ position: 'absolute', top: "20%", backgroundColor: 'var(--mantine-color-secondary-1)' }} >
        <Grid gutter="none" align="center">
          <GridCol span={{ base: 6, sm: 6 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar src={grabImage(landingInfo.visartsIcon)} size={300} radius="xs" />
          </GridCol>
          <GridCol span={{ base: 6, sm: 6 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='landing-block'>
              <Title order={2} className='landing-header'>{landingInfo.title}</Title>
              <br />
              <Text size='md' className='landing-text'>{landingInfo.statement}</Text>
            </div>
          </GridCol>
        </Grid>
      </div>
    </div>
  )
}


export default LandingScreen;