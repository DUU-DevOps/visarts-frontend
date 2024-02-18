import { createURL, getData } from "@/lib/sanity-client";
import { Grid, GridCol, Title, Center, Group, Text } from "@mantine/core";
import PersonCard from "./personCard";
import MeetUs from "@/components/meet-us/meetUs";


export default async function Home() {

    const peopleURL = createURL('people');
    const peopleData = await getData(peopleURL);
    const people = peopleData.result;

    return (
        <div>
            <Title p={20} order={1}>Meet Us</Title>
            <MeetUs people={people} />
        </div>
    )

}