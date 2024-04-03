"use client";
import React from 'react'
import { useState } from 'react';
import { Anchor, Avatar, Center, Stack, Text, Tooltip } from '@mantine/core'
import { grabImage } from '@/lib/sanityClient'

const ContactLink = ({ contactLink }: {
    contactLink: {
        name: string,
        icon: string,
        url: string,
        buttonTitle: string,
        clickCopy: boolean
    }
}) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(contactLink.url)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 500)
    }

    return (
            <Stack>
                <Center>
                    <Avatar size={100} src={contactLink.icon} alt={contactLink.name} title={contactLink.name} />
                </Center>
                <Text ta="center" size="xl" fw="700" c="accent.9">{contactLink.name}</Text>
                {contactLink.clickCopy ?
                    <Tooltip label="Copied" opened={copied}>
                        <Anchor c={"secondary.3"} ta="center" onClick={handleCopy} rel="noopener noreferrer">
                            {contactLink.buttonTitle}
                        </Anchor>
                    </Tooltip>
                    :
                    <Anchor c={"secondary.3"} ta="center" href={contactLink.url} target="_blank" rel="noopener noreferrer">
                        {contactLink.buttonTitle}
                    </Anchor>}
            </Stack>
    )
}

export default ContactLink