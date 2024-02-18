"use client";
import React from 'react'
import { Title, Grid, GridCol, Image, Stack, Text } from "@mantine/core";
import GalleryCarousel from './galleryCarousel';
import { grabImage } from '@/lib/sanityClient';
import { useState } from 'react';
import ImageModal from './imageModal';

const Artist = ({ artist }:
    {
        artist: {
            name: string,
            blurb: string,
            Image: {
                asset: object
            },
            imagesGallery: any
        }
    }) => {
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState({ title: '', image: {asset: ""} });

    const handleClick = (image: { title: '', image: {asset: ""} }) => {
        setSelected(image);
        setOpened(true);
    }

    return (
        <div>
            <Grid gutter="none" bg="var(--mantine-color-primary-6)">
                <GridCol span={{ base: 5 }}>
                    <Image
                        src={artist.Image.asset && grabImage(artist.Image)}
                        h={600}
                        alt={artist.name}
                    />
                </GridCol>
                <GridCol p="5rem" span={{ base: 7 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Stack>
                        <Title order={2} mt="md" c="gray.0" fw="600">
                            {artist.name}
                        </Title>
                        <Text mt="md" c="gray.2">
                            {artist.blurb}
                        </Text>
                    </Stack>
                </GridCol>
            </Grid>
            <div style={{ margin: '1rem' }}>
                <GalleryCarousel handleClick={handleClick} gallery={artist.imagesGallery} />
            </div>
            <ImageModal image={selected} opened={opened} close={() => setOpened(false)} />
        </div>
    )
}

export default Artist