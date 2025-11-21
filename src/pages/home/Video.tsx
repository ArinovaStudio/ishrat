import React from 'react';
import { LucideArrowRight } from "lucide-react"
import { video } from '../../mock/video';
import { VideoCard } from '../../elements/VideoCard';


const Videos: React.FC = () => {
    return (
        <div className="w-screen h-auto py-20 overflow-hidden relative">
            <h1 className="font-tenor text-9xl w-full text-center uppercase z-10 h-fit 
                max-lg:text-7xl 
                max-md:text-6xl 
                max-sm:text-4xl
            ">
                mY Videos
            </h1>

            <div className="
                w-full h-5/6 flex justify-around items-start overflow-hidden -mt-20 z-50
                max-lg:gap-6
                max-md:flex-wrap max-md:h-auto max-md:justify-center
                max-sm:flex-wrap max-sm:px-4 max-sm:-mt-10
            ">
                {
                    video.length > 0 && video.slice(0, 3).map((items, i) => (
                        <VideoCard
                            key={i}
                            title={items.title}
                            image={items.image}
                            link={items.link}
                        />
                    ))
                }
            </div>

            <div className="w-full grid place-items-center pt-10">
                <div className="
                    w-fit border-2 border-black rounded-full cursor-pointer px-10 py-1
                    flex items-center justify-center gap-4 transition-all
                    hover:bg-black hover:text-white
                    max-sm:px-6
                ">
                    <p className="font-tenor max-sm:text-sm">View All</p>
                    <LucideArrowRight size={16} />
                </div>
            </div>
        </div>
    );
};

export default Videos;
