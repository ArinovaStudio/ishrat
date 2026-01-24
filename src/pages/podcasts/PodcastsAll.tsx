import React from "react";
import { podcasts } from "../../mock/podcast";
import PodcastsCard from "../../elements/PodcastsCard";
import { useSanityQuery } from "../../lib/useSanityQuery";


type podcastType = {
  title: string;
  description: string;
  category: string;
  duration: number;
  image: string;
  spotifyLink: string;
  youtubeLink: string;
}

function PodcastsAll() {
          const {data, loading, error} = useSanityQuery<podcastType>({type: 'podcast'});
          
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error: {error.message}</div>;
  
  
  return (
    <>
      <div className="w-screen min-h-screen h-auto">
        <h1 className="font-poppins uppercase text-6xl px-6 font-bold">
          P o d c a s t s
        </h1>
                <p className="text-gray-600 text-lg font-poppins  px-6">
          Discover amazing products from our trusted merchants
        </p>
        <div className="px-32 py-10 flex justify-center mx-auto items-start flex-wrap gap-10 w-full max-w-8xl">
          {data.length > 0 &&
            data.map((items, i) => (
              <PodcastsCard
                key={i}
                title={items.title}
                desc={items.description}
                duration={items.duration}
                cat={items.category}
                spotify={items.spotifyLink}
                yt={items.youtubeLink}
                image={items.image}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default PodcastsAll;
