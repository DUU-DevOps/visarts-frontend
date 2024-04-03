import Artist from "@/components/artists/artist";
import { createURLById, getData } from "@/lib/sanityClient"


export default async function Page({ params }: { params: { id: string } }) {

    const artistURL = createURLById('artist', params.id);
    const artistData = await getData(artistURL);
    const artist = artistData.result[0];

    return (
        <Artist artist={artist} />
    )
}