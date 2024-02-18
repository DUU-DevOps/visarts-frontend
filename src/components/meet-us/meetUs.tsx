"use client";
import React from 'react'
import { Grid, GridCol, Center } from "@mantine/core";
import PersonCard from '@/components/meet-us/personCard';
import { useState } from 'react';
import PersonModal from './personModal';

const MeetUs = ({ people }: {
    people: {
        name: string,
        bio: string
        title: string,
        image: object
    }[]
}) => {
    const emptyPerson = {
        name: '',
        bio: '',
        title: '',
        image: {}
    }
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState(emptyPerson);
    const handleClose = () => {
        setOpened(false);
    }
    const handleOpen = (person: {
        name: string,
        bio: string
        title: string,
        image: object
    }) => {
        setSelected(person);
        setOpened(true);
    }
    return (
        <Center>
            <Grid gutter="none" mr="0" pr="0" >
                {people.map((person: any, key: any) => (
                    <GridCol span={3} p={20} key={key} style={{ display: 'flex', justifyContent: 'center' }}>
                        <PersonCard person={person} key={key} onClick={() => handleOpen(person)} />
                    </GridCol>
                ))}
            </Grid>
            {selected &&
                <PersonModal person={selected} opened={opened} close={handleClose} title="About" />
            }
        </Center>
    )
}

export default MeetUs