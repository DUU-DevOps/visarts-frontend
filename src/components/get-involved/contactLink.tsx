import React from 'react'
import { Anchor, Avatar, Center, Stack, Title } from '@mantine/core'
import { grabImage } from '@/lib/sanityClient'

const ContactLink = ({ contactLink }: {
    contactLink: {
        name: string,
        icon: object,
        url: string,
        buttonTitle: string,
        clickCopy: boolean
    }
}) => {
    return (
        <Stack>
            <Center>
                <Avatar size={150} src={grabImage(contactLink.icon)} alt={contactLink.name} title={contactLink.name} />
            </Center>
            <Title ta="center" order={4} fw="700" c="accent.9">{contactLink.name}</Title>
            <Anchor c={"secondary.3"} ta="center" href={contactLink.url} target="_blank" rel="noopener noreferrer">
                {contactLink.buttonTitle}
            </Anchor>
        </Stack>
    )
}

export default ContactLink