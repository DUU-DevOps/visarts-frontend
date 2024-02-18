import React from 'react'
import { MantineProvider } from '@mantine/core';
import { theme } from '../../theme';
import Shell from './shell';




const Provider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <MantineProvider theme={theme}>
            <Shell>
                {children}
            </Shell>
        </MantineProvider>
    )
}

export default Provider;