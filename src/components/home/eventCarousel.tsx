"use client";
import React from 'react'
import { Button } from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel'
import EventCard from './eventCard'
import { useRef } from 'react'


const EventCarousel = ({ events }: {
    events: {
        summary: string,
        start_timestamp: string,
        location: {address: string},
        description: string,
        image: string,
        link: string
    }[]
}) => {
    const spoilerControlRef = useRef<HTMLButtonElement>(null);

    const clickButton = () => {
        spoilerControlRef.current?.click();
    }

    return (
        <>
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
            onNextSlide={() => {spoilerControlRef.current?.click()}}
        >
            {
                events.map((event, key) => (
                    <CarouselSlide key={key} >
                        <EventCard event={event} spoilerControlRef={spoilerControlRef} />
                    </CarouselSlide>
                ))
            }
        </Carousel>
        <Button onClick={clickButton} color="primary.9" variant="light" radius="md" mt="sm" fullWidth bg="var(--mantine-color-accent-1)">
            Read More
        </Button>
        </>
    )
}

export default EventCarousel