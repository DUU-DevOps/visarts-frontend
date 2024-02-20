import React from 'react';
import { Grid, Title, GridCol, Stack, Text, Center, Anchor, Button } from '@mantine/core';
import EventCarousel from '@/components/home/eventCarousel';
import { getUpcomingEventsData } from "@/lib/calendarClient";
import EventsCalendar from '@/components/events/eventsCalendar';
import { createURL, getData } from '@/lib/sanityClient';


export default async function Events() {

    const upcomingEventsData = await getUpcomingEventsData();
    const upcomingEvents = upcomingEventsData.events;
    const settingsURL = createURL("siteSettings");
    const settingsData = await getData(settingsURL);
    const siteInfo = settingsData.result[0];

    return (
        <div>
            <Grid gutter="none" bg="var(--mantine-color-accent-1)" align="center" justify="space-between">
                <GridCol span={{ base: 12, md: 4 }} p={20}>
                    <Stack gap="xl" >
                        <Title order={1} p={20} ta="center">Events Calendar</Title>
                        {siteInfo.events.text && siteInfo.events.text.length > 0 &&
                            <Text size='lg' ta="center">
                                {siteInfo.events.text}
                            </Text>
                        }
                        <Center mt={20}>
                            <Anchor href={siteInfo.events.link} target="_blank">
                                <Button color="primary" radius="md" size="xl">
                                    Register Through LinkTree
                                </Button>
                            </Anchor>
                        </Center>
                    </Stack>
                </GridCol>
                <GridCol p={20} span={{ base: 12, md: 8 }} w="100%">
                    <EventsCalendar />
                </GridCol>
            </Grid>
            <Title p={20} ml={100} order={1}>Upcoming Events</Title>
            <EventCarousel events={upcomingEvents} />
        </div>
    )
}
