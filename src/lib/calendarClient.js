import { icsToJson } from "ics-to-json";


function areEventsEqual(a, b) {
  return (
    a["startDate"] == b["startDate"] &&
    a["endDate"] == b["endDate"] &&
    a["description"] == b["description"] &&
    a["location"] == b["location"] &&
    a["summary"] == b["summary"]
  );
}


function removeDuplicateEvents(eventsData) {
  eventsData = eventsData.filter((event, index, self) => {
    return self.findIndex(e => areEventsEqual(e, event)) === index;
  });
  return eventsData;
}


export async function getUpcomingEventsData() {
    const urlPast = "https://duke.campusgroups.com/ics?group_ids=28658&show=past&school=duke";
    const urlUpcoming = "https://duke.campusgroups.com/ics?group_ids=28658&school=duke";

    const res = await fetch(urlUpcoming);    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    var text = await res.text();
    var eventsData = icsToJson(text).slice(-20); // slicing to get most immediate events.

    // Fetch past events if no upcoming events.
    if (eventsData.length == 0){
      const resPast = await fetch(urlPast);
      text = await resPast.text();
      eventsData = icsToJson(text).slice(-5);
    }

    eventsData = removeDuplicateEvents(eventsData);

    for (var event of eventsData){
      event["startDate"] = convertToFormattedIso(event["startDate"]);
      event["endDate"] = convertToFormattedIso(event["endDate"]);
      let imageLink = getImage(event["summary"]);
      imageLink = await getImageURL(event["summary"]);
      if (imageLink){
        event["image"] = imageLink;
      }
      event["link"] = "https://duke.campusgroups.com/events?group_ids=28658";
    }
    eventsData.sort(compareEvents);

    var formattedEventsData = []
    for (var event of eventsData){
      formattedEventsData.push({
        "summary": event["summary"],
        "startDate": event["startDate"],
        "description": event["description"],
        "image": event["image"],
        "link": event["link"],
      })
    }

    return formattedEventsData;
  }


export function compareEvents(a, b){
  // Comparator for sorting events by date in ascending order.
  const dateA = a["startDate"];
  const dateB = b["startDate"];
  if (dateA < dateB) {return -1}
  else if (dateA > dateB) {return 1}
  return 0;
}


export function convertToFormattedIso(date){
  // Conversion: 20241202T230000Z -> 2024-12-02T23:00:00Z;
  const [dateHalf, timeHalf] = date.split("T");

  const year = dateHalf.slice(0, 4);
  const month = dateHalf.slice(4, 6);
  const day = dateHalf.slice(6);
  const formattedDate = [year, month, day].join("-");

  const hour = timeHalf.slice(0, 2);
  const minute = timeHalf.slice(2, 4);
  const seconds = timeHalf.slice(4); // will have "Z" attached at the end, but this doesn't matter.
  const formattedTime = [hour, minute, seconds].join(":");

  const datetime = [formattedDate, formattedTime].join("T");
  return datetime;
} 


export function getImage(summary){
  const eventName = summary.toLowerCase();

  if (eventName.includes("figure drawing")){
    return "https://cdn.sanity.io/images/iwi3amti/production/3cc695adb108f91b6a494a2eb4d7b9b2135044c0-1280x640.png";
  }
 else if (eventName.includes("bob ross canvas")){
    return "https://cdn.sanity.io/images/iwi3amti/production/a3058665434dafa6fb27d8bcf0b73bd2dbea9d53-1280x640.png";
  }
  else if (eventName.includes("knitting workshop")){
    return "https://cdn.sanity.io/images/iwi3amti/production/311e181a637fb329ab94e6546d119278ab10f86b-1280x640.png"
  }
  return null;
}


async function getImageURL(eventName) {
  const dataURL = "https://raw.githubusercontent.com/DUU-DevOps/visarts-frontend/refs/heads/main/event_images/data.json";

  const response = await fetch(dataURL);
  const data = await response.json();

  for (let event of data.data) {
    if (event.name == eventName) {
      return event.img_link;
    }
  }
}

  
export const fixImageURL = (url) => {
    return url.split(" ").join("%20");
}
