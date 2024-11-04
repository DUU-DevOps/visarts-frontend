import React from 'react'
import { Image, Grid, GridCol, Center } from '@mantine/core';

const Footer = ({email} : {email: string}) => {

    return (
        <Center >
            <Grid p={40} align='center' gutter="none" w={"100%"} bg="var(--mantine-color-accent-9)" >
                <GridCol span={{base: 12, md: 4}}>
                    <Center>
                        <Image src={"/duke-logo.png"} alt="duke-logo" height="90rem"/>
                    </Center>
                </GridCol>
                <GridCol span={{base: 12, md: 4}}>
                    <Center>
                        <p style={{fontSize: '0.8rem', color:"var(--mantine-color-gray-3)" }}>
                            Copyright © 2024 Duke University. All rights reserved.
                        </p>
                    </Center>
                </GridCol>
                <GridCol span={{base: 12, md: 4}}>
                    <Center>
                        <div>
                            <a href={email} style={{fontSize: '0.8rem', color:"var(--mantine-color-gray-3)", textAlign: 'center' }}>
                                GroupMe
                            </a>
                        </div>
                    </Center>
                </GridCol>
        </Grid>
    </Center>
    )
}

export default Footer