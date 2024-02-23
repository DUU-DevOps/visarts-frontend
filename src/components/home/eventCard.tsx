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
                />
            </CardSection>
            <Spoiler controlRef={spoilerControlRef}  hideLabel="Read Less" showLabel="Read More"  maxHeight={200} styles={{
                control: {
                    color: "var(--mantine-color-accent-3)"
                }
            }}>
                <div>
                    <Title order={4} c={"accent.1"} mt="lg" mb="lg">{event.summary}</Title>
                </div>
                <Stack justify='space-between' mb="1rem">
                    <Badge bg="var(--mantine-color-secondary-3)" size='md'>
                        {formatDate(event.start_timestamp)}
                    </Badge>
                </Stack>
                <div>
                    <Text c={"accent.1"} size='sm'>{event.description}</Text>
                </div>
            </Spoiler>
            <div style={{ marginTop: 'auto' }}>
                <Anchor href={event.link} target="_blank" w={"100%"}>
                    <Button color="primary.9" variant="light" radius="md" mt="sm" fullWidth bg="var(--mantine-color-accent-1)">
                        View Details
                    </Button>
                </Anchor>
            </div>
        </Card>
    )
}

export default EventCard