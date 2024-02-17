"use client";
import React from 'react'
import { AppShellMain, AppShell, AppShellNavbar, AppShellHeader, Group, Burger, Divider, MantineProvider, Title, Anchor, Center, ActionIcon } from '@mantine/core';
import Navlink from './navlink';
import { useDisclosure } from '@mantine/hooks';
import { IconHome, IconInfoCircle, IconTools, IconMessage } from '@tabler/icons-react';
import { theme } from '../../../theme';
import Footer from './footer';


const links = [
  {
    name: "Artists",
    icon: <IconInfoCircle size={20} />,
    link: "/artists"
  },
  {
    name: "Meet Us",
    icon: <IconTools size={20} />,
    link: "/meet-us"
  },
  {
    name: "Get Involved",
    icon: <IconMessage size={20} />,
    link: "/get-involved"
  },
  {
    name: "Brown Gallery",
    icon: <IconInfoCircle size={20} />,
    link: "/brown-gallery"
  },
  {
    name: "Events",
    icon: <IconInfoCircle size={20} />,
    link: "/events"
  }
]

const Navbar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [opened, {open, close, toggle}] = useDisclosure();
  return (
    <MantineProvider theme={theme}>
      <AppShell
          header={{ height: 160 }}
          navbar={{
            width: 10,
            breakpoint: 'sm',
            collapsed: { desktop: true, mobile: !opened },
          }}
        >
        <AppShellHeader >
          <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
            <div style={{width: '100%'}}>
              <Group px={30} justify='space-between' hiddenFrom="sm" w="100%">
                <Burger onClick={toggle} opened={opened} aria-label="Toggle navigation"  size="md"/>
                <Anchor href="/" c="gray.9">
                    <IconHome color="var(--mantine-color-gray-9)" size={30}/>
                </Anchor>
              </Group>
              <Group justify="flex-start" align='center' px={200} visibleFrom='sm'>
                <Anchor href="/">
                  <Title order={1} fw="800">
                    DUU VisArts
                  </Title>
                </Anchor>
              </Group>
              <Group px={200} visibleFrom='sm'>
                  {links.map((link, key) => (
                      <Navlink name={link.name} key={key} link={link.link}/>
                  ))}
              </Group>
            </div>
          </div>
        </AppShellHeader>
        <AppShellMain>
          {children}
        </AppShellMain>
        <AppShellNavbar  hiddenFrom="sm" w={300}>
          {
            links.map((link, key) => (
              <div key={key} >
                <div style={{marginLeft: '5rem'}}>
                  <Group>
                    <Navlink name={link.name}  icon={link.icon} link={link.link} />
                  </Group>
                </div>
                <Divider />
              </div>
            ))
          }
        </AppShellNavbar>
      </AppShell>
      <Footer />
    </MantineProvider>
  )
}

export default Navbar;