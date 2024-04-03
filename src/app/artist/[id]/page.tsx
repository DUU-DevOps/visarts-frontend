import Artist from "@/components/artists/artist";
import { createURLById, getData, grabImage } from "@/lib/sanityClient"


export default async function Page({ params }: { params: { id: string } }) {

    const artistURL = createURLById('artist', params.id);
    const artistData = await getData(artistURL);
    const artist = artistData.result[0];
    if (artist){
        artist.Image = grabImage(artist.Image);
        artist.imagesGallery = artist.imagesGallery.map((image: any) => {
            return {
                ...image,
                asset: grabImage(image.image)
            }
        }
        )
    }


    return (
        <Artist artist={artist} />
    )
}