import React from "react";
import {getData, createURL} from "@/lib/sanityClient";
import { Title, Grid, GridCol } from "@mantine/core";
import ArtistCard from "@/components/artists/artistCard";
import TitleBlock from "@/components/titleBlock";

export default async function Artists() {

    const artistsURL = createURL('artist');
    const artistsData = await getData(artistsURL);
    const artists = artistsData.result;

    const settingsURL = createURL("siteSettings");
    const settingsData = await getData(settingsURL);
    const siteInfo = settingsData.result[0];

    return (
        <div>
            <section>
                <TitleBlock title="Artist Spotlight" text={siteInfo.artistSpotlight.text} image={siteInfo.artistSpotlight.image} 
                color="var(--mantine-color-secondary-3)" orientation="left" />
            </section>
            <section>
                <Grid gutter='none' align="stretch">
                    {artists.map((artist : any, key : number) => (
                        <GridCol key={key} span={4} p ={20}>
                            <ArtistCard artist={artist} />
                        </GridCol>
                    ))}
                </Grid>
            </section>
        </div>
    )

}