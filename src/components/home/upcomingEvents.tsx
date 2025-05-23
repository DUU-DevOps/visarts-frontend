"use client";
import React from 'react'
import { Grid, GridCol, Title, Text, Stack, Center, Button, Anchor } from '@mantine/core';
import EventCarousel from './eventCarousel';


const UpcomingEvents = ({ events, text }:
    {
        events: {
            summary: string,
            startDate: string,
            description: string,
            image: string,
            link: string
        }[],
        text: string
    }) => {
    // Event panels currently suspended. 
    return (
        <Grid gutter="none" justify='space-apart'>
            <GridCol p={20} span={{ md: 12 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid align='center' w="100%">
                    <GridCol span={{ base: 12, md: 6 }}>
                        <Stack gap="xl" p={30} >
                            <Center>
                                <Title order={2} className="header-title" ta="center">
                                    Upcoming Events
                                </Title>
                            </Center>
                            {text && text.length > 0 &&
                                <Center >
                                    <Text size='md' ta="center">
                                        {text}
                                    </Text>
                                </Center>
                            }
                        </Stack>
                    </GridCol>
                    <GridCol span={{ base: 12, md: 6 }}>
                        <Center>
                            <Anchor href="/events">
                                <Button color="primary" radius="md" size="lg">
                                    View All Events
                                </Button>
                            </Anchor>
                        </Center>
                    </GridCol>
                </Grid>
            </GridCol>
            <GridCol span={{ md: 12 }} >
                <EventCarousel events={events} />
            </GridCol>
        </Grid>
    )
}

export default UpcomingEvents;