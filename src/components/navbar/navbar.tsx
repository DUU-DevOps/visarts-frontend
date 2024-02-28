import React from 'react'
import { IconHome } from '@tabler/icons-react';
import Navlink from './navlink';
import { Group, Burger, Anchor, Title } from '@mantine/core';
import SocialLinks from '../socialLinks';



const Navbar = ({ links, toggle, opened, socialLinks, title }: {
    links: { name: string, link: string }[],
    toggle: () => void,
    opened: boolean,
    socialLinks: { type: string, url: string }[],
    title: string
}) => {


return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <div style={{ width: '100%' }}>
            <Group px={30} justify='space-between' hiddenFrom="sm" w="100%">
                <Burger onClick={toggle} opened={opened} aria-label="Toggle navigation" size="md" />
                <Anchor href="/" c="gray.9">
                    <IconHome color="var(--mantine-color-gray-9)" size={30} />
                </Anchor>
            </Group>
            <Group ml={100} justify='space-between' w="80%"  align='center' visibleFrom='sm'>
                <Anchor href="/" c="var(--mantine-color-primary-8)" >
                    <Title order={1} fw="800" >
                        {title}
                    </Title>
                </Anchor>
                <div style={{ marginTop: '1rem'}}>
                    <SocialLinks socialLinks={socialLinks} color="var(--mantine-color-gray-9)" />
                </div>
            </Group>
            <Group visibleFrom='sm' ml={100} w={1200}>
                {links.map((link, key) => (
                    <Navlink name={link.name} key={key} link={link.link} />
                ))}
            </Group>
        </div>
    </div>
)
}

export default Navbar