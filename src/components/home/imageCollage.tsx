import React from 'react'
import { Grid, GridCol, Image } from '@mantine/core'

const ImageCollage = ({images}: {images: string[]}) => {
    return (
        <Grid gutter="none" bg='var(--mantine-color-accent-7)' w={700}>
            {
                images.map((image, index) => {
                    return (
                        <GridCol span={{base: 6, md: 6}} key={index}>
                            <Image
                            height={230}
                            src={image}
                            />
                        </GridCol>
                    )
                })
            }
        </Grid>
    )
}

export default ImageCollage