"use client";
import React from 'react'
import { Carousel, CarouselSlide } from '@mantine/carousel'
import EventCard from './eventCard'


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


    return (
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
    )
}

export default EventCarousel