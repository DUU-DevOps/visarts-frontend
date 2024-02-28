import React from 'react'
import { Card, Title, Image, CardSection } from '@mantine/core'
import { grabImage } from '@/lib/sanityClient'

const AlbumCard = ({ album }: {
    album: {
        name: string,
        imagesGallery: object[],
    }
}) => {
    return (
        <Card>
            <CardSection>
                <Image src={grabImage(album.imagesGallery[0])} alt={album.name} />
            </CardSection>
            <CardSection p={10}>
                <Title order={4} fw={700}>{album.name}</Title>
            </CardSection>
        </Card>
    )
}

export default AlbumCard