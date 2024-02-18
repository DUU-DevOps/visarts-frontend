import { Center, Grid, GridCol, Stack, Title, Anchor, Image } from '@mantine/core';
import React from 'react'
import { grabImage } from '@/lib/sanityClient';
import ImageCollage from './imageCollage';

const ContentBlock = ({title, text, image, images, textSpan, imageSpan, orientation, link, color} : {
    title: string,
    text: string,
    image?: object,
    images?: object[],
    textSpan: number,
    imageSpan: number,
    orientation: string,
    link: string,
    color: string
}) => {
    const imageStrings = images?.map((image: any) => grabImage(image));
    if (orientation == "right") {
        return (
            <Center>
                <Anchor  href={link} w="100%" c="var(--mantine-color-gray-9)">
                    <Grid gutter="none"  bg={color} w={"100%"} >
                        <GridCol span={{ base: imageSpan }} >
                            {image && 
                                <Image src={grabImage(image)} height={460} w={"100%"}/>
                            }
                            {imageStrings &&
                            <div style={{display: 'flex', justifyContent: 'center', backgroundColor: 'var(--mantine-color-accent-7)'}}>
                                <ImageCollage images={imageStrings}/>
                            </div>
                            }
                        </GridCol>
                        <GridCol pl={50} pr={50} span={{ base: textSpan }} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Stack px="xl" justify='space-between' h="80%" w="90%">
                                <Title order={1} style={{textAlign: 'left'}}>
                                    {title}
                                </Title>
                                <Title order={4} style={{textAlign: 'left'}} fw="700" fs="10vw">
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
                        <GridCol pl={50} pr={50} span={{ base: textSpan }} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <Stack px="xl" justify='space-between' h="80%" w="90%">
                                <Title order={1} style={{textAlign: 'left'}}>
                                    {title}
                                </Title>
                                <Title order={4} style={{textAlign: 'left'}} fw="700" fs="10vw">
                                    {text}
                                </Title>
                            </Stack>
                        </GridCol>
                        <GridCol span={{ base: imageSpan }} >
                            {image && 
                                <Image src={grabImage(image)} height={460} w={"100%"}/>
                            }
                            {imageStrings &&
                            <div style={{display: 'flex', justifyContent: 'center', backgroundColor: 'var(--mantine-color-accent-7)'}}>
                                <ImageCollage images={imageStrings}/>
                            </div>
                            }
                        </GridCol>
                    </Grid>
                </Anchor>
        </Center>
    )
}

export default ContentBlock;