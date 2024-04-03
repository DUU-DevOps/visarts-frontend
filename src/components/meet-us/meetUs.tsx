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
        image: object,
        order: number
    }[]
}) => {
    const emptyPerson = {
        name: '',
        bio: '',
        title: '',
        image: {},
        order: 0
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
        image: object,
        order: number
    }) => {
        setSelected(person);
        setOpened(true);
    }
    people.sort((a, b) => {
        if (a.order > b.order || a.order === undefined) {
            return 1;
        }
        if (a.order < b.order || b.order === undefined) {
            return -1;
        }
        return 0;
    });
    return (
        <Center>
            <Grid gutter="none" mr="0" pr="0" w="100%">
                {people && people.length > 0 && people.map((person: any, key: any) => (
                    <GridCol span={{ base: 6, sm: 6, md: 3, lg: 2, xl: 2 }} p={20} key={key} style={{ display: 'flex', justifyContent: 'center' }}>
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