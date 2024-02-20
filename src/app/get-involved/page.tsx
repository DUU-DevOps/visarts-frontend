import React from 'react'
import { createURL, getData, grabImage } from '@/lib/sanityClient'
import { Center, Title, Text, Stack, Group, Grid, GridCol } from '@mantine/core';
import ContactLink from '@/components/get-involved/contactLink';

const Page = async () => {
    const settingsURL = createURL("siteSettings");
    const settingsData = await getData(settingsURL);
    const info = settingsData.result[0].getInvolved;

    return (
        <div style={{height: "100%"}}>
            <div style={{ backgroundImage: `url(${grabImage(info.image)})`, backgroundSize: 'cover', height: '45vh', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '45vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)'
                }} />
                <Center style={{position: 'absolute'}} left={0} right={0} ml="auto" mr="auto" mt="100" w={"60%"}>
                    <Stack>
                        <Title ta="center" order={1} c="accent.0">Get Involved</Title>
                        <Text ta="center" c="accent.0">{info.message}</Text>
                    </Stack>
                </Center>
            </div>
            <Center>
                <Grid gutter="none" w="100%"  align="center" mt="2rem">
                    {
                        info.contactLinks?.map((contact : {
                            name: string,
                            icon: object,
                            url: string,
                            buttonTitle: string,
                            clickCopy: boolean
                        }, index : number) => {
                            return (
                                <GridCol span={{base: 3}} key={index} >
                                    <ContactLink key={index} contactLink={contact} />
                                </GridCol>
                            )
                        })
                    }
                </Grid>
            </Center>
        </div>
    )
}

export default Page