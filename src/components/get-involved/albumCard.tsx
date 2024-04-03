import React from 'react'
import { Card, Title, Image, CardSection } from '@mantine/core'

const AlbumCard = ({ album }: {
    album: {
        name: string,
        imagesGallery:{asset: string}[],
    }
}) => {
    return (
        <Card>
            <CardSection>
                <Image w={400} src={album.imagesGallery[0].asset} alt={album.name} height={300}/>
            </CardSection>
            <CardSection p={10}>
                <Title order={5} >{album.name}</Title>
            </CardSection>
        </Card>
    )
}

export default AlbumCard