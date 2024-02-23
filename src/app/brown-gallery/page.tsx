import { Grid, GridCol, Title, Text, Image, Stack, Center, Anchor, Button } from '@mantine/core'
import React from 'react'
import { grabImage, getData, createURL } from '@/lib/sanityClient'
import { IconArrowDown } from '@tabler/icons-react'
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
                <Grid gutter="none" align='center' bg="var(--mantine-color-accent-1)">
                    <GridCol span={{base: 8, md: 7}}>
                        <Stack gap={75}>
                            <Title order={1} ta="center">The Brown Gallery</Title>
                            <Center w="100%">
                                <Text ta="center" w="80%">
                                    {siteInfo.brownGallery.text}
                                </Text>
                            </Center>
                            <Center>
                                <Stack>
                                    <Anchor href={siteInfo.brownGallery.link} target="_blank">
                                        <Button color='primary.5' size='lg'>
                                            Application
                                        </Button>
                                    </Anchor>
                                    <Anchor href="#galleries" >
                                        <IconArrowDown size={40} color=""/>
                                    </Anchor>
                                </Stack>
                            </Center>
                        </Stack>
                    </GridCol>
                    <GridCol span={{base: 4, md: 5}} p={50}>
                        <Image src={grabImage(siteInfo.brownGallery.image)} alt="Brown Gallery" />
                    </GridCol>
                </Grid>
            </section>
            <section id="galleries">
            <Title p={20} ml={100} order={1}>Galleries</Title>
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