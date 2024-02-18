import { createURL, getData } from "@/lib/sanityClient";
import { Title } from "@mantine/core";
import MeetUs from "@/components/meet-us/meetUs";


export default async function Meet() {

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