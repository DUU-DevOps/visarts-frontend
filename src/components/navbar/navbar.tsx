import React from 'react'
import { IconHome } from '@tabler/icons-react';
import Navlink from './navlink';
import { Group, Burger, Anchor,  Title} from '@mantine/core';
import SocialLinks from '../socialLinks';
import { createURL, getData } from '@/lib/sanityClient';


const Navbar = async ({links, toggle, opened}: {
    links: { name: string, link: string }[],
    toggle: () => void,
    opened: boolean
}) => {
    
    const socialLinksURL = createURL('socialLink');
    const socialLinksData = await getData(socialLinksURL);
    const socialLinks = socialLinksData.result;


    return (
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <div style={{ width: '100%' }}>
                <Group px={30} justify='space-between' hiddenFrom="sm" w="100%">
                    <Burger onClick={toggle} opened={opened} aria-label="Toggle navigation" size="md" />
                    <Anchor href="/" c="gray.9">
                        <IconHome color="var(--mantine-color-gray-9)" size={30} />
                    </Anchor>
                </Group>
                <Group justify="space-between" align='center' px={200} w="100%" visibleFrom='sm'>
                    <Anchor href="/" c="var(--mantine-color-primary-8)" >
                        <Title order={1} fw="800" >
                            DUU VisArts
                        </Title>
                    </Anchor>
                    <div style={{ marginTop: '1rem' }}>
                        <SocialLinks socialLinks={socialLinks} color="var(--mantine-color-gray-9)" />
                    </div>
                </Group>
                <Group px={200} visibleFrom='sm'>
                    {links.map((link, key) => (
                        <Navlink name={link.name} key={key} link={link.link} />
                    ))}
                </Group>
            </div>
        </div>
    )
}

export default Navbar