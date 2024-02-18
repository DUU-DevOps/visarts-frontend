"use client";
import React from 'react'
import { Grid, GridCol, Title, Text, Stack, Center, Button, Anchor } from '@mantine/core';
import EventCarousel from './eventCarousel';


const UpcomingEvents = ({ events }:
    {
        events: {
            summary: string,
            start_timestamp: string,
            location: { address: string },
            description: string,
            image: string,
            link: string
        }[]
    }) => {
    return (
        <Grid gutter="none" justify='space-apart'>
            <GridCol p={20} span={{ md: 12 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid align='center' w="100%">
                    <GridCol span={{ base: 12, md: 6 }}>
                        <Stack gap="xl" p={30} pr={150} pl={150}>
                            <Center>
                                <Title order={2} ta="center">
                                    Upcoming Events
                                </Title>
                            </Center>
                            <Center >
                                <Text size='lg' ta="center">
                                    Check out our upcoming events and join us for some fun and creativity!
                                </Text>
                            </Center>
                        </Stack>
                    </GridCol>
                    <GridCol span={{ base: 12, md: 6 }}>
                        <Center>
                            <Anchor href="/events">
                                <Button color="primary" radius="md" size="xl">
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