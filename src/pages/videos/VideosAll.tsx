import React from "react";
import { VideoCard } from "../../elements/VideoCard";
import { video } from "../../mock/video";
import { useSanityQuery } from "../../lib/useSanityQuery";


type VideoType = {
  title: string;
  mainImage: string;
  videolink: string;
};

function VideosAll() {
    const { data, loading, error } = useSanityQuery<VideoType>({
      type: "video",
      limit: 3,
    });
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
  return (
    <>
      <div className="w-screen min-h-screen h-auto">
        <h1 className="font-poppins uppercase text-6xl px-6 font-bold">
          v i d e o s
        </h1>
                <p className="text-gray-600 text-lg font-poppins  px-6">
          Discover amazing products from our trusted merchants
        </p>
        <div className="px-32 py-10 flex justify-center mx-auto items-start flex-wrap gap-20 w-full max-w-8xl">
          {data.length > 0 &&
            data.map((items, i) => (
                <VideoCard
                            key={i}
                            title={items.title}
                            image={items.mainImage}
                            link={items.videolink}
                        />
            ))}
        </div>
      </div>
    </>
  );
}

export default VideosAll;
