import LandingScreen from "@/components/home/landingScreen";
import { createURL, getData } from "@/lib/sanityClient";
import { getUpcomingEventsData } from "@/lib/calendarClient";
import UpcomingEvents from "@/components/home/upcomingEvents";
import ContentBlock from "@/components/home/contentBlock";


export default async function Home() {
  const settingsURL = createURL("siteSettings");
  const artistURL = createURL("artist");
  const settingsData = await getData(settingsURL);
  const artistData = await getData(artistURL);
  const siteInfo = settingsData.result[0];
  const artistImages = artistData.result.slice(0, Math.min(4, artistData.result.length)).map((a: { Image: object }) => a.Image);
  const landingInfo = {
    backgroundImage: siteInfo.image,
    statement: siteInfo.statement,
    visartsIcon: siteInfo.visartsIcon,
  }
  const upcomingEventsData = await getUpcomingEventsData();
  const upcomingEvents = upcomingEventsData.events;
  console.log(siteInfo.figureDrawingText)
  return (
    <main>
      <section>
        <LandingScreen landingInfo={landingInfo} />
      </section>
      <section>
        <ContentBlock
          title="Artist Spotlight"
          text={siteInfo.spotlightText}
          images={artistImages}
          imageSpan={8}
          textSpan={4}
          orientation="left"
          color='var(--mantine-color-secondary-3)'
          link="/artists" />
      </section>
      <section>
        <ContentBlock
          title="Brown Gallery" 
          text={siteInfo.brownGalleryText} 
          image={siteInfo.brownGalleryImage} 
          imageSpan={8} 
          textSpan={4} 
          orientation="right"
          color='var(--mantine-color-primary-4)'
          link='/brown-gallery' />
      </section>
      <section>
      <ContentBlock
          title="Figure Drawing" 
          text={siteInfo.figureDrawingText} 
          image={siteInfo.figureDrawingImage} 
          imageSpan={8} 
          textSpan={4} 
          orientation="left"
          color='var(--mantine-color-accent-1)'
          link={siteInfo.eventsLink} />
      </section>
      <section style={{ marginBottom: '2rem' }}>
        <UpcomingEvents events={upcomingEvents} text={siteInfo.eventsText}/>
      </section>
    </main>
  );
}
