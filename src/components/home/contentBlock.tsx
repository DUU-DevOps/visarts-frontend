import { Center, Grid, GridCol, Stack, Title, Anchor, Image } from '@mantine/core';
import React from 'react'
import { grabImage } from '@/lib/sanityClient';

const ContentBlock = ({title, text, image, textSpan, imageSpan, orientation, link, color} : {
    title: string,
    text: string,
    image?: object,
    textSpan: number,
    imageSpan: number,
    orientation: string,
    link: string,
    color: string
}) => {
    if (orientation == "right") {
        return (
            <Center>
                <Anchor  href={link} w="100%" c="var(--mantine-color-gray-9)">
                    <Grid gutter="none"  bg={color} w={"100%"} >
                        <GridCol span={{ base: imageSpan - 3, md: imageSpan }} >
                            {image && 
                                <Image className='content-image' src={grabImage(image)} w={"100%"}/>
                            }
                        </GridCol>
                        <GridCol span={{ base: textSpan + 3, md: textSpan}} style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Stack px="xl" justify='space-between'>
                                <Title order={1} className='header-title'>
                                    {title}
                                </Title>
                                <Title order={5} fw="700" className='header-text'>
                                    {text}
                                </Title>
                            </Stack>
                        </GridCol>
                    </Grid>
                </Anchor>
            </Center>
        )
    }
    return (
        <Center>
            <Anchor  href={link} w="100%" c="var(--mantine-color-gray-9)">
                <Grid gutter="none"  bg={color} w={"100%"} >
                        <GridCol span={{ base: textSpan + 3, md: textSpan}} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Stack px="xl" justify='space-between'>
                                <Title order={1} className='header-title'>
                                    {title}
                                </Title>
                                <Title order={5}  fw="700" className='header-text'>
                                    {text}
                                </Title>
                            </Stack>
                        </GridCol>
                        <GridCol span={{ base: imageSpan - 3, md: imageSpan }} >
                            {image && 
                                <Image className='content-image' src={grabImage(image)} w={"100%"} />
                            }
                        </GridCol>
                    </Grid>
                </Anchor>
        </Center>
    )
}

export default ContentBlock;