import React from 'react'
import { MantineProvider, em } from '@mantine/core';
import { theme } from '../../theme';
import Shell from './shell';
import { createURL, getData } from '@/lib/sanityClient';



const Provider = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const settingsURL = createURL("siteSettings");
    const settingsData = await getData(settingsURL);
    const siteInfo = settingsData.result[0];
    const socialLinks = siteInfo.socialLinks;
    const email = siteInfo.email;
    const title = siteInfo.title;

    return (
        <MantineProvider theme={theme}>
            <Shell title={title} email={email} socialLinks={socialLinks}>
                {children}
            </Shell>
        </MantineProvider>
    )
}

export default Provider;