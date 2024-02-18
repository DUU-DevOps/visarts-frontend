

export async function getUpcomingEventsData() {
    const res = await fetch(process.env.UPCOMING_EVENTS_API_URL, {next: {revalidate: 300}});
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json();
  }
  

export const fixImageURL = (url) => {
    return url.split(" ").join("%20");
}