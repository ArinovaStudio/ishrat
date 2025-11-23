import React from 'react';
import { Ghost, Heart, VenetianMask, type LucideIcon } from "lucide-react";

const WriteCards = ({ Icon, title }: { Icon: LucideIcon, title: string }) => {
    return (
        <div
            className="
                w-1/3 h-[90%] flex justify-center items-center flex-col bg-white gap-8
                max-lg:w-1/3
                max-md:w-1/2 max-md:h-auto
                max-sm:w-full max-sm:h-auto max-sm:py-10
            "
        >
            <Icon size={69} strokeWidth={1} className="max-sm:size-14" />
            <h1 className="text-5xl font-tenor text-black max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">{title}</h1>
        </div>
    )
}

const Write: React.FC = () => {
    return (
        <div className="
            w-screen h-screen overflow-hidden bg-[#ECECEC] relative 
            flex justify-center items-center
            max-md:h-auto max-md:py-20
        ">
            {/* Top heading */}
            <h1 className="
                text-9xl font-poppins text-neutral-600 font-extrabold absolute top-12 left-10 z-10
                max-xl:text-8xl
                max-lg:text-7xl
                max-md:text-6xl max-md:static max-md:mb-8
                max-sm:text-4xl
            ">
                WHAT DO
            </h1>

            {/* Cards */}
            <div className="
                w-5/6 h-[75%] realtive z-30 flex justify-around items-start gap-10
                max-lg:gap-6
                max-md:flex-wrap max-md:justify-center max-md:h-auto
                max-sm:flex-col max-sm:w-full max-sm:gap-6
            ">
                <WriteCards Icon={Heart} title={"Romantic"} />
                <WriteCards Icon={VenetianMask} title={"Thriller"} />
                <WriteCards Icon={Ghost} title={"Horror"} />
            </div>

            {/* Bottom heading */}
            <h1 className="
                text-7xl font-poppins text-neutral-600 font-bold absolute bottom-36 right-12 uppercase z-50
                max-xl:text-6xl
                max-lg:text-5xl
                max-md:text-4xl max-md:static max-md:mt-10
                max-sm:text-3xl
            ">
                I write ?
            </h1>
        </div>
    );
};

export default Write;
