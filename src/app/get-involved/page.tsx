import React from 'react'
import { createURL, getData, grabImage } from '@/lib/sanityClient'
import { Center, Title, Text, Stack, Group, Grid, GridCol } from '@mantine/core';
import ContactLink from '@/components/get-involved/contactLink';
import TitleBlock from '@/components/titleBlock';
import AlbumCard from '@/components/get-involved/albumCard';

const Page = async () => {
    const settingsURL = createURL("siteSettings");
    const settingsData = await getData(settingsURL);
    const info = settingsData.result[0].getInvolved;

    const albumsLink = createURL("album");
    const albumsData = await getData(albumsLink);
    const albums = albumsData.result;

    return (
        <div style={{ height: "100%" }}>
            <TitleBlock
                title="Get Involved"
                text={info.message}
                image={info.image}
                color="var(--mantine-color-secondary-3)"
                orientation="left"
            />
            <Center>
                <Grid gutter="none" w="100%" align="center" p="2rem">
                    {
                        info.contactLinks?.map((contact: {
                            name: string,
                            icon: object,
                            url: string,
                            buttonTitle: string,
                            clickCopy: boolean
                        }, index: number) => {
                            return (
                                <GridCol span={{ base: 3 }} key={index} >
                                    <ContactLink key={index} contactLink={contact} />
                                </GridCol>
                            )
                        })
                    }
                </Grid>
            </Center>
            <Center>
                <Grid w="100%" gutter="none" justify='space-apart' align="center">
                    {
                        albums.map((album: any, index: number) => {
                            return (
                                <GridCol span={{ base: 12, sm: 4, md: 4, lg: 4 }} key={index}>
                                    <AlbumCard album={album} />
                                </GridCol>
                            )
                        }
                        )
                    }
                </Grid>
            </Center>
        </div>
    )
}

export default Page