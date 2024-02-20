import { Grid, GridCol, Title, Text, Image, Stack, Center, Anchor, Button } from '@mantine/core'
import React from 'react'
import { grabImage, getData, createURL } from '@/lib/sanityClient'

const Page = async () => {

    const settingsURL = createURL("siteSettings");
    const settingsData = await getData(settingsURL);
    const siteInfo = settingsData.result[0];

    return (
        <div>
            <Grid gutter="none" align='center'>
                <GridCol span={{base: 8, md: 7}}>
                    <Stack gap={75}>
                        <Title order={1} ta="center">The Brown Gallery</Title>
                        <Center w="100%">
                            <Text ta="center" w="80%">
                                {siteInfo.brownGallery.text}
                            </Text>
                        </Center>
                        <Center>
                            <Anchor href={siteInfo.brownGallery.link} target="_blank">
                                <Button color='secondary.3'>
                                    Application
                                </Button>
                            </Anchor>
                        </Center>
                    </Stack>
                </GridCol>
                <GridCol  span={{base: 4, md: 5}}>
                    <Image src={grabImage(siteInfo.brownGallery.image)} alt="Brown Gallery" />
                </GridCol>
            </Grid>
        </div>
    )
}

export default Page