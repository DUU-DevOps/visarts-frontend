import React from 'react'
import { createURL, getData, grabImage } from '@/lib/sanityClient'
import { Center, Title, Text, Stack, Group, Grid, GridCol } from '@mantine/core';
import ContactLink from '@/components/get-involved/contactLink';
import TitleBlock from '@/components/titleBlock';
import AlbumCard from '@/components/get-involved/albumCard';
import AlbumModal from '@/components/get-involved/albumModal';
import Albums from '@/components/get-involved/albums';

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
            <Center >
                <Grid gutter="none" w="80%" align="center" p="1rem" justify='center' >
                    {
                        info.contactLinks?.map((contact: {
                            name: string,
                            icon: object,
                            url: string,
                            buttonTitle: string,
                            clickCopy: boolean
                        }, index: number) => {
                            return (
                                <GridCol p={20} span={{ xs: 12, sm: 6, md: 3 }} key={index} >
                                    <ContactLink key={index} contactLink={contact} />
                                </GridCol>
                            )
                        })
                    }
                </Grid>
            </Center>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none" style={{position: 'absolute', backgroundColor: "transparent"}}>
                <polygon points="100 0 100 10 0 0" fill="var(--mantine-color-body)"/>
            </svg>
            <Albums albums={albums} />
        </div>
    )
}

export default Page