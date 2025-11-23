import React from "react";
import { VideoCard } from "../../elements/VideoCard";
import { video } from "../../mock/video";

function VideosAll() {
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
          {video.length > 0 &&
            video.map((items, i) => (
<VideoCard
                            key={i}
                            title={items.title}
                            image={items.image}
                            link={items.link}
                        />
            ))}
        </div>
      </div>
    </>
  );
}

export default VideosAll;
