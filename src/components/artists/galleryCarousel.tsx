"use client";
import React from 'react'
import { Image, UnstyledButton } from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { grabImage } from '@/lib/sanityClient';

const GalleryCarousel = ({gallery, handleClick}: {gallery: any, handleClick: (image: { title: '', image: {asset: ""} }) => void}) => {
    return (
        <Carousel
            slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
            slideGap={{ base: 0, sm: 'md' }}
            align="start"
            withIndicators
            pr={40}
            pl={40}
            pb={40}
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
                gallery && gallery.map((image:any, key:number) => (
                    <UnstyledButton onClick={() => handleClick(image)}>
                        <CarouselSlide key={key} >
                            <Image src={grabImage(image.image)} height={"300"} w="100%" />
                        </CarouselSlide>
                    </UnstyledButton>
                ))
            }
        </Carousel>
    )
}

export default GalleryCarousel;