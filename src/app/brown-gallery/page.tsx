import { Grid, GridCol, Title, Text, Image, Stack, Center, Anchor, Button } from '@mantine/core'
import React from 'react'
import { grabImage, getData, createURL } from '@/lib/sanityClient'
import ArtistCard from '@/components/artists/artistCard'


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
                <Grid gutter="none" align='center'>
                    <GridCol span={{ base: 12, sm: 7 }} p={30}>
                        <Stack >
                            <Title order={2} ta="center">The Brown Gallery</Title>
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
                    <GridCol span={{ base: 12, sm: 5 }} >
                        <Image fit='contain' height={500} src={grabImage(siteInfo.brownGallery.image)} alt="Brown Gallery" />
                    </GridCol>
                </Grid>
            </section>
            {
                artists && artists.length > 0 &&
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none" style={{ position: 'absolute', backgroundColor: "transparent" }}>
                    <polygon points="100 0 100 10 0 0" fill="var(--mantine-color-body)" />
                </svg>
            }
            {
                artists && artists.length > 0 &&
                <section style={{ backgroundImage: `url(${grabImage(siteInfo.brownGallery.backgroundImage)})`, backgroundSize: 'cover', paddingTop: '1rem' }}>
                    <Grid gutter='none' align="stretch">
                        {artists.map((artist: any, key: number) => (
                            <GridCol key={key} span={{ base: 12, sm: 6, md: 4 }} p={20}>
                                <ArtistCard artist={artist} />
                            </GridCol>
                        ))}
                    </Grid>
                </section>
            }
        </div>
    )
}

export default Page