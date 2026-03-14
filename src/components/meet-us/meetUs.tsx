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
        <Center>
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>VisArts Chair</h2>
                <Grid gutter="none" justify="center" w="100%">
                    {chairPeople.map((person: any, key: any) => (
                        <GridCol span={{ base: 6, sm: 6, md: 3, lg: 2, xl: 2 }} p={20} key={key} style={{ display: 'flex', justifyContent: 'center' }}>
                            <PersonCard person={person} onClick={() => handleOpen(person)} />
                        </GridCol>
                    ))}
                </Grid>

                <h2 style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '2rem' }}>Executive Board</h2>
                <Grid gutter="none" justify="center" w="100%">
                    {execPeople.map((person: any, key: any) => (
                        <GridCol span={{ base: 6, sm: 6, md: 3, lg: 2, xl: 2 }} p={20} key={key} style={{ display: 'flex', justifyContent: 'center' }}>
                            <PersonCard person={person} onClick={() => handleOpen(person)} />
                        </GridCol>
                    ))}
                </Grid>

                <h2 style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '2rem' }}>Committee Members</h2>
                <Grid gutter="none" justify="center" w="100%">
                    {committeePeople.map((person: any, key: any) => (
                        <GridCol span={{ base: 6, sm: 6, md: 3, lg: 2, xl: 2 }} p={20} key={key} style={{ display: 'flex', justifyContent: 'center' }}>
                            <PersonCard person={person} onClick={() => handleOpen(person)} />
                        </GridCol>
                    ))}
                </Grid>
            </div>

            {selected &&
                <PersonModal person={selected} opened={opened} close={handleClose} title="About" />
            }
        </Center>
    )
}

export default MeetUs
