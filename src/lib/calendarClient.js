

export async function getUpcomingEventsData() {
    const res = await fetch('https://calendar.duke.edu/events/index.json?&cfu[]=Visual%20and%20Creative%20Arts&future_days=14&feed_type=simple', {next: {revalidate: 300}});
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json();
  }
  

export const fixImageURL = (url) => {
    return url.split(" ").join("%20");
}