import React from "react";
import { Music2, Timer, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

function PodcastsCard({
  title,
  desc,
  duration,
  cat,
  spotify,
  yt,
  image
}: {
  title: string;
  desc: string;
  duration: number;
  cat: string;
  spotify: string;
  yt: string;
  image: string
}) {
  return (
    <div className="w-[48%] h-52 relative">
      <img
        src={image}
        alt="podcast cover"
        className="w-full h-full object-cover rounded-2xl"
      />

      <div className="w-full h-full absolute rounded-2xl p-4 inset-0 z-20 bg-black/40 text-white">
        <h1 className="text-2xl font-poppins font-semibold">{title}</h1>
        <p className="text-sm text-white/90 mb-4">{desc}</p>
        <div className="flex justify-start items-center gap-3 max-lg:gap-2">
          <div className="rounded-full px-6 bg-white/20 text-white backdrop-blur-sm py-1 text-sm max-lg:px-4 max-lg:text-xs">
            {cat}
          </div>

          <div className="backdrop-blur-sm rounded-full px-6 bg-yellow-500/20 text-yellow-400 py-1 flex justify-center items-center gap-2 text-sm max-lg:px-4 max-lg:text-xs">
            <Timer size={16} /> {duration}min.
          </div>
        </div>

        <div
          className="
                        flex justify-start items-center gap-3 absolute bottom-6 right-6
                        max-lg:static max-lg:mt-4 max-lg:gap-2
                    "
        >
          <Link
            to={spotify}
            className="rounded-full px-6 bg-green-400/20 text-green-200 backdrop-blur-sm py-1 flex justify-center items-center gap-2 text-sm max-lg:px-4 max-lg:text-xs"
          >
            <Music2 size={14} /> Spotify
          </Link>
          <Link
            to={yt}
            className="rounded-full px-6 bg-red-400/20 text-red-200 py-1 backdrop-blur-sm flex justify-center items-center gap-2 text-sm max-lg:px-4 max-lg:text-xs"
          >
            <Youtube size={18} /> YouTube
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PodcastsCard;
