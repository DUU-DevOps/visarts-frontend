import React from 'react'
import { Card, Title, Text, Group, Spoiler, CardSection, Image, Anchor, Badge, Button, Stack } from '@mantine/core'
import { fixImageURL } from '@/lib/calendarClient'

const EventCard = ({ event, spoilerControlRef }: {
    event: {
        summary: string,
        start_timestamp: string,
        location: { address: string },
        description: string,
        image: string,
        link: string
    },
    spoilerControlRef?: React.RefObject<HTMLButtonElement>
}) => {
    function formatDate(inputDate: string) {
        const dateObject = new Date(inputDate);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = dateObject.toLocaleDateString('en-US', options);
        return formattedDate;
    }

    return (
        <Card shadow="sm" radius="md" padding="xl" style={{ width: "100%", height: "100%" }} bg={"var(--mantine-color-primary-8)"}>
            <CardSection>
                <Image
                    src={fixImageURL(event.image)}
                    height={200}
                    width={"100%"}
                />
            </CardSection>
            <div>
                <Title order={5} c={"accent.1"} mt="lg" mb="lg" fw={500}>{event.summary}</Title>
            </div>
            <Stack justify='space-between' mb="1rem">
                <Badge bg="var(--mantine-color-secondary-3)" size='md'>
                    {formatDate(event.start_timestamp)}
                </Badge>
            </Stack>
            <div>
                <Text c={"accent.1"} size='sm' lineClamp={5}>{event.description}</Text>
            </div>
            <div style={{ marginTop: 'auto' }}>
                <Anchor href={event.link} target="_blank" w={"100%"}>
                    <Button color="primary.9" variant="light" radius="md" mt="sm" fullWidth bg="var(--mantine-color-accent-1)">
                        View More Details
                    </Button>
                </Anchor>
            </div>
        </Card>
    )
}

export default EventCard