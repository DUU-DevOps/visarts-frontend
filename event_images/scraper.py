import json
from requests_html import HTMLSession
from bs4 import BeautifulSoup

urls = (
    "https://duke.campusgroups.com/events?group_ids=28658",
    "https://duke.campusgroups.com/events?group_ids=28658&show=past"
)
data = []

session = HTMLSession()
for url in urls:
    response = session.get(url)
    response.html.render(sleep=5)
    soup = BeautifulSoup(response.html.raw_html, "html.parser")

    ul = soup.select_one("div#page-cont div#listing-cont")
    lis = ul.select("li.list-group-item")
    lis = [li for li in lis if li.attrs.get("id") and li.attrs.get("id").startswith("event")]

    for li in lis:
        name = li.select_one("h3.media-heading a").text
        img_link = li.select_one("div.listing-element__preimg-block a img").attrs["src"]
        img_link = f"https://duke.campusgroups.com{img_link}"
        date = li.select_one("div.media-heading p").text

        print(f"{name} ({date}): {img_link}")

        data.append({
            "name": name,
            "date": date,
            "img_link": img_link
        })

with open("data.json", "w") as file:
    json.dump(data, file, indent=2)
