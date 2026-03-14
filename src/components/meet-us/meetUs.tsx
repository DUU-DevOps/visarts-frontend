"use client";
import React from 'react'
import { Grid, GridCol } from "@mantine/core";
import PersonCard from '@/components/meet-us/personCard';
import { useState } from 'react';
import PersonModal from './personModal';

const MeetUs = ({ people }: {
    people: {
        name: string,
        bio: string
        title: string,
        image: object,
        order: number,
        section: string
    }[]
}) => {
    const emptyPerson = {
        name: '',
        bio: '',
        title: '',
        image: {},
        order: 0,
        section: ''
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
        order: number,
        section: string
    }) => {
        setSelected(person);
        setOpened(true);
    }

    people.sort((a, b) => {
        return (a.order || 0) - (b.order || 0);
    });

    const chairPeople = people.filter((person) => person.section === 'chair');
    const execPeople = people.filter((person) => person.section === 'exec');
    const committeePeople = people.filter((person) => person.section === 'member');

    return (
        <div style={{ width: '100%' }}>
            <h2 style={{ textAlign: 'center' }}>VisArts Chair</h2>
            <Grid justify="center">
                {chairPeople.map((person: any, key: any) => (
                    <GridCol span={{ base: 12, sm: 6, md: 4, lg: 3, xl: 3 }} p={20} key={key}>
                        <PersonCard person={person} onClick={() => handleOpen(person)} />
                    </GridCol>
                ))}
            </Grid>

            <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Executive Board</h2>
            <Grid justify="center">
                {execPeople.map((person: any, key: any) => (
                    <GridCol span={{ base: 12, sm: 6, md: 4, lg: 3, xl: 3 }} p={20} key={key}>
                        <PersonCard person={person} onClick={() => handleOpen(person)} />
                    </GridCol>
                ))}
            </Grid>

            <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Committee Members</h2>
            <Grid justify="center">
                {committeePeople.map((person: any, key: any) => (
                    <GridCol span={{ base: 12, sm: 6, md: 4, lg: 3, xl: 3 }} p={20} key={key}>
                        <PersonCard person={person} onClick={() => handleOpen(person)} />
                    </GridCol>
                ))}
            </Grid>

            {selected &&
                <PersonModal person={selected} opened={opened} close={handleClose} title="About" />
            }
        </div>
    )
}

export default MeetUs
