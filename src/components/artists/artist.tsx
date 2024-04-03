"use client";
import React from 'react'
import { Title, Grid, GridCol, Image, Stack, Text } from "@mantine/core";
import GalleryCarousel from './galleryCarousel';
import { grabImage } from '@/lib/sanityClient';
import { useState } from 'react';
import ImageModal from './imageModal';
import SocialLinks from '../socialLinks';


const Artist = ({ artist }:
    {
        artist: {
            name: string,
            blurb: string,
            Image: {
                asset: object
            },
            imagesGallery: any,
            socialLinks: any,
            title: string
        }
    }) => {
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState({ title: '', image: { asset: "" }, blurb: '' });

    const handleClick = (image: { title: '', image: { asset: "" }, blurb: '' }) => {
        setSelected(image);
        setOpened(true);
    }

    return (
        <div>
            <Grid gutter="none" bg="var(--mantine-color-primary-6)">
                <GridCol span={{ base: 12, sm: 5 }} display="flex" style={{alignItems: 'center'}}>
                        <Image
                            src={artist.Image.asset && grabImage(artist.Image)}
                            fit="contain"
                            alt={artist.name}
                        />
                </GridCol>
                <GridCol pl="5rem" pr="5rem" span={{ base: 12, sm: 7 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Stack>
                        <Title order={2} mt="md" c="gray.0" fw="600">
                            {artist.title}
                        </Title>
                        {artist.name && artist.name !== '' &&
                            <Title order={4} fs="italic" c="gray.0" fw="500">
                                {artist.name}
                            </Title>
                        }
                        <Text mt="md" c="gray.2">
                            {artist.blurb}
                        </Text>
                        <SocialLinks socialLinks={artist.socialLinks} color="var(--mantine-color-gray-3)" />
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