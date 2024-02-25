import React from 'react'
import { BackgroundImage, Card, Text } from '@mantine/core'
import { grabImage } from '@/lib/sanityClient'

const AlbumCard = ({ album }: {
    album: {
        name: string,
        imagesGallery: object[],
    }
}) => {
    return (
        <Card>
            <BackgroundImage src={grabImage(album.imagesGallery[0])} h={300} w={300}>
                <Text>
                    {album.name}
                </Text>
            </BackgroundImage>
        </Card>
    )
}

export default AlbumCard