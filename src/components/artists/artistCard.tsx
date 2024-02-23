import React from 'react'
import { Card, CardSection, Image, Text, Title, Anchor, UnstyledButton, Group } from '@mantine/core';
import { grabImage } from '@/lib/sanityClient';

const ArtistCard = ({artist} : {
    artist: {
        _id: string,
        name: string,
        blurb: string,
        Image: any
    }
}) => {
    return (
            <Card
                padding="xl"
                bg='secondary.0'
                h="100%"
            >
                <CardSection>
                        <Image
                            src={artist.Image.asset && grabImage(artist.Image)}
                            h={300}
                            alt={artist.name}
                        />
                </CardSection>
                <Title order={3} mt='md' c="gray.9" fw="600">
                    {artist.name}
                </Title>
                <Text mt="md" size="sm" c="gray.8" mb="md" >
                    {artist.blurb}
                </Text>
                <div style={{marginTop: 'auto'}}>
                    <Anchor href={`/artist/${artist._id}`}>
                        <Text fw={700}>
                            {`Click to View ${artist.name.split(' ')[0]}'s Work`}
                        </Text>
                    </Anchor>
                </div>
            </Card>
    )
}

export default ArtistCard