"use client";
import React from 'react'
import { AppShellMain, AppShell, AppShellNavbar, AppShellHeader, Group, Burger, Divider, MantineProvider } from '@mantine/core';
import Navlink from './navlink';
import { useDisclosure } from '@mantine/hooks';
import { IconHome, IconInfoCircle, IconTools, IconMessage } from '@tabler/icons-react';
import { theme } from '../../../theme';


const links = [
  {
    name: "Home",
    icon: <IconHome size={20} />,
  },
  {
    name: "About",
    icon: <IconInfoCircle size={20} />,
  },
  {
    name: "Projects",
    icon: <IconTools size={20} />,
  },
  {
    name: "Contact",
    icon: <IconMessage size={20} />,
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
          header={{ height: 70 }}
          navbar={{
            width: 10,
            breakpoint: 'sm',
            collapsed: { desktop: true, mobile: !opened },
          }}
        >
        <AppShellHeader >
              <Group h="100%"  px="xl"  justify="flex-start" >
                  <Burger onClick={toggle} opened={opened} aria-label="Toggle navigation" hiddenFrom="sm" size="sm"/>
                  <Group visibleFrom='sm' justify='center' w="100%" >
                  {links.map((link, key) => (
                      <Navlink link={link.name} key={key}/>
                  ))}
                  </Group>
              </Group>
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
                    <Navlink  icon={link.icon} link={link.name} onClick={() => close()}/>
                  </Group>
                </div>
                <Divider />
              </div>
            ))
          }
        </AppShellNavbar>
      </AppShell>
    </MantineProvider>
  )
}

export default Navbar;