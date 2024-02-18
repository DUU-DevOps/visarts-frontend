import React from 'react'
import { Image, Grid, GridCol, Center, Title } from '@mantine/core';

const Footer = () => {

    return (
        <Center >
            <Grid p={20} align='center' gutter="none" w={"100%"} bg="var(--mantine-color-accent-9)" >
                <GridCol span={{base: 12, md: 4}}>
                    <Center>
                        <div>
                            <Title order={4} c="gray.3" style={{textAlign: 'center'}}>
                                Contact Us
                            </Title> 
                            <p style={{fontSize: '0.8rem', color:"var(--mantine-color-gray-3)", textAlign: 'center' }}>
                                email: duu-visarts@duke.edu
                            </p>
                        </div>
                    </Center>
                </GridCol>
                <GridCol span={{base: 12, md: 4}}>
                    <Center>
                        <Image src={"/duke-logo.png"} alt="duke-logo" height="180rem"/>
                    </Center>
                </GridCol>
                <GridCol span={{base: 12, md: 4}}>
                    <Center>
                        <p style={{fontSize: '0.8rem', color:"var(--mantine-color-gray-3)" }}>
                            Copyright © 2024 Duke University. All rights reserved.
                        </p>
                    </Center>
                </GridCol>
        </Grid>
    </Center>
    )
}

export default Footer