import React, { ReactElement, useEffect } from 'react'
import { useState } from 'react'
import { Anchor, Group } from '@mantine/core';

const Navlink = ({link, onClick, icon} : {link: string, onClick?: Function, icon?: ReactElement}) => {
    const [color, setColor] = useState('var(--mantine-color-gray-5)');

    return (
        <Anchor
        c = {color}
        onMouseEnter={() => setColor('var(--mantine-color-gray-7)')}
        onMouseLeave={() => setColor('var(--mantine-color-gray-5)')}
        href={`#${link.toLowerCase()}`}
        onClick={(e) => {onClick && onClick();}}
        mr="xl"
        ml="xl"
        >
            <Group>
                {icon}
                <h3 >{link}</h3>
            </Group>
        </Anchor>
    )
}

export default Navlink