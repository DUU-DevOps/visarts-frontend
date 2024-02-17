"use client";
import React from 'react'
import { Grid, GridCol, Title, Text, Stack, Center } from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import EventCard from './eventCard';
import '@mantine/carousel/styles.css';


const UpcomingEvents = ({ events }:
    {
        events: {
            summary: string,
            start_timestamp: string,
            location: {address: string},
            description: string,
            image: string,
            link: string
        }[]
    }) => {
    return (
        <Grid gutter="none" justify='space-apart'>
            <GridCol span={{ md: 12}} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Stack gap="xl"  p={30} pr={150} pl={150}>
                    <Center>
                        <Title order={2} >
                            Upcoming Events
                        </Title>
                    </Center>
                    <Center >
                        <Text size='lg'>
                            Check out our upcoming events and join us for some fun and creativity!
                        </Text>
                    </Center>
                </Stack>
            </GridCol>
            <GridCol span={{ md: 12 }} >
                <Carousel 
                slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
                slideGap={{ base: 0, sm: 'md' }}
                align="start"
                withIndicators
                pr={40}
                pl={40}
                pb={40}
                styles={{
                    indicator: {
                      backgroundColor: 'var(--mantine-color-accent-9)',
                    },
                    control: {
                        backgroundColor: 'var(--mantine-color-accent-5)',
                        color: 'var(--mantine-color-accent-1)',
                    }
                  }}
                >
                    {
                        events.map((event, key) => (
                            <CarouselSlide key={key} >
                                <EventCard event={event} />
                            </CarouselSlide>
                        ))
                    }
                </Carousel>
            </GridCol>
        </Grid>
    )
}

export default UpcomingEvents;