import React, { ReactElement, useEffect } from 'react'
import { useState } from 'react'
import { Anchor, Group, Title } from '@mantine/core';

const Navlink = ({name, icon, link} : 
    {name: string, icon?: ReactElement, link: string}) => {
    const [color, setColor] = useState('var(--mantine-color-gray-7)');

    return (
        <Anchor
        c = {color}
        onMouseEnter={() => setColor('var(--mantine-color-gray-9)')}
        onMouseLeave={() => setColor('var(--mantine-color-gray-7)')}
        href={`${link}`}
        mr={30}
        >
            <Group>
                {icon}
                <Title order={4} fw={700}>{name}</Title>
            </Group>
        </Anchor>
    )
}

export default Navlink