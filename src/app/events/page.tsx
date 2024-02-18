import React from 'react';
import { Title } from '@mantine/core';
import EventCarousel from '@/components/home/eventCarousel';
import { getUpcomingEventsData } from "@/lib/calendarClient";
import EventsCalendar from '@/components/events/eventsCalendar';


export default async function Events() {

    const upcomingEventsData = await getUpcomingEventsData();
    const upcomingEvents = upcomingEventsData.events;

    return (
        <div>
            <Title p={20} order={1}>Events</Title>
            <EventsCalendar />
            <EventCarousel events={upcomingEvents}/>
        </div>
    )
}
