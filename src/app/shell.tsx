"use client";
import React, { ReactNode, useState, useEffect } from 'react'
import { AppShellMain, AppShell, AppShellNavbar, AppShellHeader, Group, Divider } from '@mantine/core';
import Footer from '@/components/footer';
import Navlink from '@/components/navbar/navlink';
import { IconCalendarEvent, IconHeartHandshake, IconFriends, IconBrush } from '@tabler/icons-react';
import Navbar from '@/components/navbar/navbar';
import { useDisclosure } from '@mantine/hooks';
import SocialLinks from '@/components/socialLinks';
import { motion, useAnimation } from 'framer-motion';
import { useHeadroom } from '@mantine/hooks';




const links = [
  {
    name: "Meet Us",
    icon: <IconFriends size={20} />,
    link: "/meet-us"
  },
  {
    name: "Get Involved",
    icon: <IconHeartHandshake size={20} />,
    link: "/get-involved"
  },
  {
    name: "Brown Gallery",
    icon: <IconBrush size={20} />,
    link: "/brown-gallery"
  },
  {
    name: "Events",
    icon: <IconCalendarEvent size={20} />,
    link: "/events"
  }
]


const Shell = ({
  children, socialLinks, email, title }: {
    children: ReactNode,
    socialLinks: { type: string, url: string }[],
    email: string,
    title: string
  }) => {

  const [opened, { open, close, toggle }] = useDisclosure();

  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <>
      <AppShell
        header={{ height: 110, collapsed: !pinned && !opened, offset: false}}
        navbar={{
          width: 10,
          breakpoint: 'sm',
          collapsed: { desktop: true, mobile: !opened },
        }}
      >
        <AppShellHeader w={"100%"}>
          <Navbar title={title} links={links} toggle={toggle} socialLinks={socialLinks} opened={opened} />
        </AppShellHeader>
        <AppShellNavbar hiddenFrom="sm" w={320} mt={110}>
          {
            links.map((link, key) => (
              <div key={key}>
                <div style={{ marginLeft: '5rem', height: '4rem', display: 'flex', alignItems: 'center' }}>
                  <Group>
                    <Navlink name={link.name} icon={link.icon} link={link.link} />
                  </Group>
                </div>
                <Divider />
              </div>
            ))
          }
          <div style={{ display: 'flex',  alignItems: 'flex-start', justifyContent: 'center', marginTop: '1rem' }}>
            <SocialLinks socialLinks={socialLinks} color="var(--mantine-color-gray-9)" />
          </div>
        </AppShellNavbar>
        <AppShellMain className='main' mt={110}>
          {children}
        </AppShellMain>
      </AppShell>
      <Footer email={email} />
    </>
  )
}

export default Shell;


