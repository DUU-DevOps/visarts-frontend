import React from 'react'
import { Modal, Image, Text } from '@mantine/core';
import { grabImage } from '@/lib/sanityClient';

const ImageModal = ({ image, opened, close }: {
    image: {
        title: string,
        asset: string,
        blurb: string
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
            <div>
                <Image
                    src={image.asset}
                    fit='contain'
                    alt={image.title}
                />
                {image.blurb && image.blurb !== '' &&
                    <Text bg="var(--mantine-color-accent-1)" p={10} mt={10}>
                        {image.blurb}
                    </Text>
                }
            </div>
        </Modal>
    )
}

export default ImageModal;