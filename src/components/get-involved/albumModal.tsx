import React from 'react'
import { Modal, Image, BackgroundImage, Text } from '@mantine/core';
import { grabImage } from '@/lib/sanityClient';
import { Carousel, CarouselSlide } from '@mantine/carousel';

const AlbumModal = ({ album, opened, close }: {
    album: {
        name: string,
        imagesGallery: {asset: string}[],
    },
    opened: boolean,
    close: () => void
}) => {
    return (
        <Modal opened={opened} onClose={close} title={album.name} size="xl"
        styles={{
            title: {
                color: "var(--mantine-color-gray-9)",
                fontWeight: "700",
                fontSize: "1.5rem"
            }
        }}>
            <div>
                <Carousel
                withIndicators
                styles={{
                    indicator: {
                        backgroundColor: 'var(--mantine-color-accent-9)',
                    },
                    control: {
                        backgroundColor: 'var(--mantine-color-accent-5)',
                        color: 'var(--mantine-color-accent-1)',
                    }
                }}
                >
                    {
                        album.imagesGallery.map((image: {asset: string}, index: number) => {
                            return (
                                <CarouselSlide key={index}>
                                    <Image
                                    src={grabImage(image)}
                                    alt={album.name}
                                    />
                                </CarouselSlide>
                            )
                        })
                    }
                </Carousel>
            </div>
        </Modal>
    )
}

export default AlbumModal;