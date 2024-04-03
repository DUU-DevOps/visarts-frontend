import React from 'react'
import { Card, CardSection, Image, Text, Title, Anchor } from '@mantine/core';
import { grabImage } from '@/lib/sanityClient';

const ArtistCard = ({ artist }: {
    artist: {
        _id: string,
        name: string,
        title: string,
        blurb: string,
        Image: any
    }
}) => {
    return (
        <Card
            padding="xl"
            bg='gray.0'
            h="100%"
        >
            <CardSection>
                <Image
                    src={artist.Image.asset && grabImage(artist.Image)}
                    h={300}
                    alt={artist.name}
                />
            </CardSection>
            <Title order={4} mt='md' c="gray.9" fw="600">
                {artist.title}
            </Title>
            {
                artist.name && artist.name !== '' &&
                <Title order={6} fs="italic" c="gray.9" fw="500">
                    {artist.name}
                </Title>
            }
            <Text mt="md" size="sm" c="gray.8" mb="md" lineClamp={3}>
                {artist.blurb}
            </Text>
            <div style={{ marginTop: 'auto' }}>
                <Anchor href={`/artist/${artist._id}`}>
                    <Text fw={700} >
                        Click to View More
                    </Text>
                </Anchor>
            </div>
        </Card>
    )
}

export default ArtistCard