"use client";
import React from 'react'
import { Center, Grid, GridCol, UnstyledButton } from '@mantine/core';
import AlbumCard from './albumCard';
import AlbumModal from './albumModal';
import { useState } from 'react';
import { grabImage } from '@/lib/sanityClient';

const Albums = ({ albums }: {
    albums: {
        name: string,
        imagesGallery: { asset: string }[],
    }[]
}) => {
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState({
        name: "",
        imagesGallery: []
    });
    
    return (
        <Center bg="primary.5" pt={50}>
            <Grid w="100%" gutter="none" justify='space-apart' align="center">
                {
                    albums.map((album: any, index: number) => {
                        return (
                            <GridCol span={{ base: 12, sm: 12, md: 6, lg: 4 }} p={10} key={index}>
                                <Center>
                                    <UnstyledButton onClick={() => {
                                        setSelected(album);
                                        setOpened(true);
                                    }}>
                                        <AlbumCard album={album} />
                                    </UnstyledButton>
                                </Center>
                            </GridCol>
                        )
                    }
                    )
                }
            </Grid>
            <AlbumModal
                opened={opened}
                close={() => setOpened(false)}
                album={selected}
            />
        </Center>
    )
}

export default Albums