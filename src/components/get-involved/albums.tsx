"use client";
import React from 'react'
import { Center, Grid, GridCol, UnstyledButton } from '@mantine/core';
import AlbumCard from './albumCard';
import AlbumModal from './albumModal';
import { useState } from 'react';

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
        <Center bg="accent.1" pt={30}>
            <Grid w="100%" gutter="none" justify='space-apart' align="center">
                {
                    albums.map((album: any, index: number) => {
                        return (
                            <GridCol span={{ base: 12, sm: 4, md: 4, lg: 4 }} p={10} key={index}>
                                <UnstyledButton onClick={() => {
                                    setSelected(album);
                                    setOpened(true);
                                }}>
                                    <AlbumCard album={album} />
                                </UnstyledButton>
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