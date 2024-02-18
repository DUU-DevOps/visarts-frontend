import { Modal, Title, Text, CardSection, Card, Image } from '@mantine/core'
import { grabImage } from '@/lib/sanityClient'
import React from 'react'

const PersonModal = ({ person, opened, close, title }:
    {
        person: {
            name: string,
            bio: string,
            title: string,
            image: any
        },
        opened: boolean,
        close: () => void,
        title: string
    }) => {
    return (
            <Modal opened={opened} onClose={close} size="xl" 
            styles={{
                body: {
                    backgroundColor: 'var(--mantine-color-accent-1)'
                },
                header: {
                    backgroundColor: 'var(--mantine-color-accent-1)',
                },
                close: {
                    color: 'var(--mantine-color-gray-9)',
                }
            }}>
                <Card
                padding="xl"
                bg='transparent'
                >
                <CardSection>
                    <Image
                    src={person.image.asset && grabImage(person.image)}
                    h={300}
                    alt={person.name}
                    />
                </CardSection>
                <Title order={3}  mt="xl" c="gray.9" fw="600">
                    {person.name}
                </Title>
                <Text mt="xs" size="lg" c="gray.7">
                    {person.title}
                </Text>
                <Text mt="md" c="gray.8">
                    {person.bio}
                </Text>
                </Card>
            </Modal>
    )
}

export default PersonModal