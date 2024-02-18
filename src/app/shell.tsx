"use client";
import React, { ReactNode } from 'react'
import { AppShellMain, AppShell, AppShellNavbar, AppShellHeader, Group, Divider, MantineProvider } from '@mantine/core';
import Footer from '@/components/footer';
import Navlink from '@/components/navbar/navlink';
import { IconInfoCircle, IconTools, IconMessage } from '@tabler/icons-react';
import Navbar from '@/components/navbar/navbar';
import { useDisclosure } from '@mantine/hooks';



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


const Shell = ({
  children }: { children: ReactNode }) => {

  const [opened, { open, close, toggle }] = useDisclosure();

  return (
    <>
      <AppShell
        header={{ height: 160 }}
        navbar={{
          width: 10,
          breakpoint: 'sm',
          collapsed: { desktop: true, mobile: !opened },
        }}
      >
        <AppShellHeader >
          <Navbar links={links} toggle={toggle} opened={opened} />
        </AppShellHeader>
        <AppShellNavbar hiddenFrom="sm" w={300}>
          {
            links.map((link, key) => (
              <div key={key} >
                <div style={{ marginLeft: '5rem' }}>
                  <Group>
                    <Navlink name={link.name} icon={link.icon} link={link.link} />
                  </Group>
                </div>
                <Divider />
              </div>
            ))
          }
        </AppShellNavbar>
        <AppShellMain className='main'>
          {children}
        </AppShellMain>
      </AppShell>
      <Footer />
    </>
  )
}

export default Shell;


