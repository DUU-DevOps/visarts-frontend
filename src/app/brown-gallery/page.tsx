import { Grid, GridCol, Title, Text, Image, Stack, Center, Anchor, Button, ActionIcon } from '@mantine/core'
import React from 'react'
import { grabImage, getData, createURL } from '@/lib/sanityClient'
import { IconArrowDown } from '@tabler/icons-react'
import ArtistCard from '@/components/artists/artistCard'
import TitleBlock from '@/components/titleBlock'


const Page = async () => {

    const artistsURL = createURL('artist');
    const artistsData = await getData(artistsURL);
    const artists = artistsData.result;

    const settingsURL = createURL("siteSettings");
    const settingsData = await getData(settingsURL);
    const siteInfo = settingsData.result[0];

    return (
        <div>
            <section>
                <Grid gutter="none" align='center' >
                    <GridCol span={{ base: 8, md: 7 }}>
                        <Stack >
                            <Title order={1} ta="center">The Brown Gallery</Title>
                            <Center w="100%">
                                <Text ta="center" w="80%">
                                    {siteInfo.brownGallery.text}
                                </Text>
                            </Center>
                            <Center mt="auto">
                                <Stack>
                                    <Anchor href={siteInfo.brownGallery.link} target="_blank">
                                        <Button color='primary.5' size='lg'>
                                            Application
                                        </Button>
                                    </Anchor>
                                </Stack>
                            </Center>
                        </Stack>
                    </GridCol>
                    <GridCol span={{ base: 4, md: 5 }} >
                        <Image fit='contain' height={500} src={grabImage(siteInfo.brownGallery.image)} alt="Brown Gallery" />
                    </GridCol>
                </Grid>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none" style={{position: 'absolute', backgroundColor: "transparent"}}>
                <polygon points="100 0 100 10 0 0" fill="var(--mantine-color-body)"/>
            </svg>
            <section style={{ backgroundImage: `url(${grabImage(siteInfo.brownGallery.backgroundImage)})`, backgroundSize: 'cover', paddingTop: '1rem' }}>
                <Grid gutter='none' align="stretch">
                    {artists.map((artist: any, key: number) => (
                        <GridCol key={key} span={4} p={20}>
                            <ArtistCard artist={artist} />
                        </GridCol>
                    ))}
                </Grid>
            </section>
        </div>
    )
}

export default Page