import { Music2, Timer, Youtube } from 'lucide-react';
import React from 'react';
import { podcasts } from '../../mock/podcast';
import { Link } from 'react-router-dom';



const PodcastCard = ({ title, desc, duration, cat, spotify, yt, image }: {
    title: string
    desc: string
    duration: number
    cat: string
    spotify: string
    yt: string
    image: string
}) => {

    return (
        <div
            className="
                w-40 sm:hover:w-3/5 transition-all h-full rounded-2xl overflow-hidden relative group
                max-lg:w-1/3
                max-md:w-1/2 max-md:h-auto
                max-sm:w-full max-sm:h-auto
            "
        >

            {/* OVERLAY FIXED FOR MOBILE */}
            <div
                className="
                    absolute inset-0 w-full h-full z-50 p-6 flex flex-col
                    justify-start


                    bg-black/40 opacity-0 backdrop-blur-xs 
                    group-hover:opacity-100 transition-all duration-300

                    max-lg:opacity-100 max-lg:bg-black/60 max-lg:backdrop-blur-sm max-lg:static
                    max-sm:absolute max-sm:inset-0 max-sm:opacity-100 max-sm:bg-black/60 max-sm:backdrop-blur-sm
                "
            >
                <h1 className="text-5xl font-tenor text-white max-lg:text-3xl max-md:text-2xl">
                    {title}
                </h1>

                <p className="text-sm text-white/80 font-poppins my-4 max-lg:text-xs">
                    {desc}
                </p>

                <div className="flex justify-start items-center gap-3 max-lg:gap-2">
                    <div className="rounded-full px-6 bg-white/20 text-white py-1 text-sm max-lg:px-4 max-lg:text-xs">
                        {cat}
                    </div>

                    <div className="rounded-full px-6 bg-yellow-500/20 text-yellow-400 py-1 flex justify-center items-center gap-2 text-sm max-lg:px-4 max-lg:text-xs">
                        <Timer size={16} /> {duration}min.
                    </div>
                </div>

                <div
                    className="
                        flex justify-start items-center gap-3 absolute bottom-6 right-6
                        max-lg:static max-lg:mt-4 max-lg:gap-2
                    "
                >
                    <Link to={spotify} className="rounded-full px-6 bg-green-500/20 text-green-400 py-1 flex justify-center items-center gap-2 text-sm max-lg:px-4 max-lg:text-xs">
                        <Music2 size={14} /> Spotify
                    </Link>
                    <Link to={yt} className="rounded-full px-6 bg-red-500/20 text-red-400 py-1 flex justify-center items-center gap-2 text-sm max-lg:px-4 max-lg:text-xs">
                        <Youtube size={18} /> YouTube
                    </Link>
                </div>

            </div>

            {/* IMAGE ALWAYS BEHIND TEXT */}
            <img
                alt="image"
                src={image}
                className="w-full h-full object-cover"
            />
        </div>
    );
}



const Podcasts: React.FC = () => {
    return (
        <div className="w-screen h-screen overflow-hidden max-lg:h-auto max-lg:py-20">
            <h1
                className="
                    font-tenor text-6xl text-right mx-12
                    max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:text-center max-sm:mx-0
                "
            >
                From Pen To Podcast
            </h1>

            <div
                className="
                    w-full h-[80%] flex justify-center items-center flex-nowrap gap-6 px-14 overflow-hidden
                    max-lg:flex-wrap max-lg:h-auto max-lg:justify-center
                    max-md:px-6 max-sm:px-4
                "
            >
                {podcasts.length > 0 && podcasts.slice(0, 7).map((items, i) => (
                    <PodcastCard
                        key={i}
                        cat={items.cateogry}
                        desc={items.description}
                        duration={items.duration}
                        title={items.title}
                        image={items.image}
                        spotify={items.spotifyLink}
                        yt={items.youtubeLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Podcasts;
