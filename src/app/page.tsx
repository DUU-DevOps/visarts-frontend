import LandingScreen from "@/components/home/landingScreen";
import { createURL, getData } from "@/lib/sanity-client";
import {getUpcomingEventsData} from "@/lib/calendar-client";
import UpcomingEvents from "@/components/home/upcomingEvents";


export default async function Home() {
  const settingsURL = createURL("siteSettings");
  const settingsData = await getData(settingsURL);
  const siteInfo = settingsData.result[0];
  const landingInfo = {
    backgroundImage: siteInfo.image,
    statement: siteInfo.statement,
    visartsIcon: siteInfo.visartsIcon,
  }
  const upcomingEventsData = await getUpcomingEventsData();
  const upcomingEvents = upcomingEventsData.events;

  return (
    <main>
      <section>
        <LandingScreen landingInfo={landingInfo} />
      </section>
      <section style={{marginTop: '5rem'}}>
        <UpcomingEvents events={upcomingEvents} />
      </section>
    </main>
  );
}
