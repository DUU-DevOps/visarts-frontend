import React from 'react'
import {grabImage} from "../../lib/sanityClient";
import { Avatar, Group, Title, Text } from '@mantine/core';




export const LandingScreen = async ({landingInfo}: {landingInfo: {
  backgroundImage: object,
  statement: string,
  visartsIcon: object
},

}) => {
        

  return (
    <div  style={{backgroundImage: `url(${grabImage(landingInfo.backgroundImage)})`, backgroundSize: 'cover', height: '90vh', position: 'relative'}}>
      <div style={{position: 'absolute', top: "20%", backgroundColor: 'var(--mantine-color-secondary-1)'}} >
        <Group justify='center'>
          <Avatar src={grabImage(landingInfo.visartsIcon)} size={"25rem"} radius="xs"/>
          <div style={{width: "40rem", height: "100%"}}>
            <Title order={2}>Experience the world through <em>your</em> art. </Title>
            <br />
            <br />
            <Text size='md'>{landingInfo.statement}</Text>
          </div>
        </Group>
      </div>
    </div>
  )
}


export default LandingScreen;