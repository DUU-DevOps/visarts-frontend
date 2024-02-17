import React from 'react'
import {Card, Title, Text, Group, Spoiler, CardSection, Image, Anchor, Badge, Button} from '@mantine/core'
import { fixImageURL } from '@/lib/calendar-client'

const EventCard = ({event}: {event: {
    summary: string,
    start_timestamp: string,
    location: {address: string},
    description: string,
    image: string,
    link: string
}}) => {
    function formatDate(inputDate: string) {
        const dateObject = new Date(inputDate);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = dateObject.toLocaleDateString('en-US', options);
        return formattedDate;
    }

    return (
        <Card shadow="sm" radius="md" padding="xl" style={{width: "100%", height: "100%"}} bg={"var(--mantine-color-primary-8)"}>
            <CardSection>
                <Image 
                src={fixImageURL(event.image)}
                />
            </CardSection>
            <div style={{maxHeight: "15%"}}>
                <Title order={4} c={"accent.1"} mt="lg" mb="lg">{event.summary}</Title>
            </div>
            <Group justify='space-between' px="xl" mb="1rem">
                <Badge bg="var(--mantine-color-secondary-3)" size='lg'>
                    {formatDate(event.start_timestamp)}
                </Badge>
                <Badge bg="var(--mantine-color-secondary-3)" size='lg'>
                    {event.location.address}
                </Badge>
            </Group>
            <div style={{  }}>
                <Spoiler hideLabel="Read Less" showLabel="Read More" maxHeight={300}>
                    <Text c={"accent.1"}>{event.description}</Text>
                </Spoiler>
            </div>
            <div style={{ marginTop: 'auto' }}>
                <Anchor href={event.link} target="_blank" w={"100%"}>
                    <Button color="accent9" variant="light" radius="md" mt="md" fullWidth bg="var(--mantine-color-accent-1)">
                        View Event
                    </Button>
                </Anchor>
            </div>
        </Card>
    )
}

export default EventCard