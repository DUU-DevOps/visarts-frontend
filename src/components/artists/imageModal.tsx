import React from 'react'
import { Modal, Image, BackgroundImage } from '@mantine/core';
import { grabImage } from '@/lib/sanityClient';

const ImageModal = ({ image, opened, close }: {
    image: {
        title: string,
        image: {asset: string},
    },
    opened: boolean,
    close: () => void
}) => {
    return (
        <Modal opened={opened} onClose={close} title={image.title} size="xl"
        styles={{
            title: {
                color: "var(--mantine-color-gray-9)",
                fontWeight: "700",
                fontSize: "1.5rem"
            }
        }}>
                <Image
                src={image.image.asset && grabImage(image.image)}
                h={600}
                fit='contain'
                alt={image.title}
                />
        </Modal>
    )
}

export default ImageModal;