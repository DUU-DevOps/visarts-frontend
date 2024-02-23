import React from 'react'
import { Center, Grid, GridCol, Image, Stack, Title, Text } from '@mantine/core';
import { grabImage } from '@/lib/sanityClient';

const TitleBlock = ({ title, text, image, color, orientation }:
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
                    <GridCol pl={50} pr={50} span={{ base: 5 }} style={{display: 'flex', alignItems: 'center'}}>
                        <Stack px="xl" align='center' justify="center" w="100%">
                            <Title order={1} ta="center">
                                {title}
                            </Title>
                            <Text ta="center" fs="10vw">
                                {text}
                            </Text>
                        </Stack>
                    </GridCol>
                </Grid>
            </Center>
        )
    }

    return (
        <Center>
            <Grid gutter="none" bg={color} w={"100%"} >
                <GridCol pl={50} pr={50} span={{ base: 12, md: 5 }} style={{display: 'flex', alignItems: 'center'}}>
                    <Stack px="xl" align='center' justify="center" w="100%">
                        <Title order={1} ta="center">
                            {title}
                        </Title>
                        <Text ta="center" fs="10vw">
                            {text}
                        </Text>
                    </Stack>
                </GridCol>
                <GridCol span={{ base: 7 }} visibleFrom="sm" >
                    {image &&
                        <Image src={grabImage(image)} height={460} w={"100%"} />
                    }
                </GridCol>
            </Grid>
        </Center>
    )
}

export default TitleBlock