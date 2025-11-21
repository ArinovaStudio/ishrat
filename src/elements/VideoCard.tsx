import { LucidePlay } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const VideoCard = ({ image, title, link }: { image: string, title: string, link: string }) => {
    return (
        <div
            className="
                w-1/4 h-5/6 flex justify-between items-center flex-col
                max-lg:w-1/3
                max-md:w-1/2 max-md:h-auto
                max-sm:w-full max-sm:h-auto max-sm:mb-10
            "
        >
            <div className="
                w-full h-5/6 relative
                max-md:h-72
                max-sm:h-60
            ">
                <img
                    alt="books thumbnail"
                    src={image}
                    className="w-full h-full object-cover"
                />
                <div className='absolute w-full h-full inset-0 bg-black/20 flex items-start justify-end flex-col p-4'>
                    <h1 className="text-3xl font-poppins text-white max-sm:text-xl">{title}</h1>

                    <div className="w-full grid place-items-end py-2">
                        <Link to={link} className="
                            w-fit border border-white text-white rounded-full cursor-pointer px-4 h-fit py-1 
                            flex items-center justify-center gap-2 
                            hover:border-red-400 hover:bg-red-400 transition-all
                            max-sm:px-3 max-sm:py-1
                        ">
                            <p className="text-base font-tenor max-sm:text-sm">Watch</p>
                            <LucidePlay size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
