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
                <Grid gutter="none" align='center' bg="var(--mantine-color-accent-1)">
                    <GridCol span={{base: 8, md: 7}}>
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
                    <GridCol span={{base: 4, md: 5}} >
                        <Image fit='contain' height={500} src={grabImage(siteInfo.brownGallery.image)} alt="Brown Gallery" />
                    </GridCol>
                </Grid>
            </section>
            <section>
            <Title p={20} order={2} ta="center">View Galleries</Title>
                <Grid gutter='none' align="stretch">
                    {artists.map((artist : any, key : number) => (
                        <GridCol key={key} span={4} p ={20}>
                            <ArtistCard artist={artist} />
                        </GridCol>
                    ))}
                </Grid>
            </section>
        </div>
    )
}

export default Page