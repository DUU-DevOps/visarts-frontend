import { createURL, getData } from "@/lib/sanityClient";
import MeetUs from "@/components/meet-us/meetUs";
import TitleBlock from "@/components/titleBlock";


export default async function Meet() {

    const peopleURL = createURL('people');
    const peopleData = await getData(peopleURL);
    const people = peopleData.result;

    const settingsURL = createURL("siteSettings");
    const settingsData = await getData(settingsURL);
    const siteInfo = settingsData.result[0];

    return (
        <div>
            <section>
                <TitleBlock title="Meet Us" text={siteInfo.meetUs.text} image={siteInfo.meetUs.image} color="var(--mantine-color-primary-4)" orientation="left" />
            </section>
            <section>
                <MeetUs people={people} />
            </section>
        </div>
    )

}