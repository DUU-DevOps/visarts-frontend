import React from 'react'
import {Center, Grid, GridCol, Image, Stack, Title} from '@mantine/core';
import { grabImage } from '@/lib/sanityClient';

const TitleBlock = ({title, text, image, color, orientation}:
    {
        title: string,
        text: string,
        image: any,
        color: string,
        orientation: string
    }) => {
    if (orientation === "right") {
        return (
            <Center>
                <Grid gutter="none" bg={color} w={"100%"} >
                    <GridCol span={{ base: 7 }} >
                        {image &&
                            <Image src={grabImage(image)} height={460} w={"100%"} />
                        }
                    </GridCol>
                    <GridCol pl={50} pr={50} span={{ base: 5 }} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Stack px="xl" justify='space-between' h="80%" w="90%">
                            <Title order={1} style={{ textAlign: 'left' }}>
                                {title}
                            </Title>
                            <Title order={4} style={{ textAlign: 'left' }} fw="700" fs="10vw">
                                {text}
                            </Title>
                        </Stack>
                    </GridCol>
                </Grid>
            </Center>
        )
    }
    
    return (
        <Center>
            <Grid gutter="none" bg={color} w={"100%"} >
                <GridCol pl={50} pr={50} span={{ base: 5 }} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Stack px="xl" justify='space-between' h="80%" w="90%">
                        <Title order={1} style={{ textAlign: 'left' }}>
                            {title}
                        </Title>
                        <Title order={4} style={{ textAlign: 'left' }} fw="700" fs="10vw">
                            {text}
                        </Title>
                    </Stack>
                </GridCol>
                <GridCol span={{ base: 7 }} >
                    {image &&
                        <Image src={grabImage(image)} height={460} w={"100%"} />
                    }
                </GridCol>
            </Grid>
        </Center>
    )
}

export default TitleBlock