import React from "react";
import {getData, createURL} from "@/lib/sanityClient";
import { Title, Grid, GridCol } from "@mantine/core";
import ArtistCard from "@/components/artists/artistCard";

export default async function Artists() {

    const artistsURL = createURL('artist');
    const artistsData = await getData(artistsURL);
    const artists = artistsData.result;

    return (
        <div>
            <Title p={20} order={1}>Artists</Title>
            <Grid gutter='none' align="stretch">
                {artists.map((artist : any, key : number) => (
                    <GridCol key={key} span={4} p ={20}>
                        <ArtistCard artist={artist} />
                    </GridCol>
                ))}
            </Grid>
        </div>
    )

}