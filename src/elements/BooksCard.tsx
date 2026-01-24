import React from 'react';
import { LucideArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import urlFor from '../lib/ImageBuilder';




export const BooksCard = ({ image, title, description, link, full = false, date, tags, price }: { date?: string, tags?: string[], price?: number, image: string, title: string, description: string, link: string, full?: boolean }) => {
    return (
        <div className="
            w-1/4 h-5/6 flex justify-between items-center flex-col
            max-lg:w-1/3
            max-md:w-1/2 max-md:h-auto
            max-sm:w-full max-sm:h-auto
            max-sm:mb-10
        ">
            <div className="w-full h-5/6 relative group max-md:h-72 max-sm:h-60">
                <img
                    alt={title}
                    src={urlFor(image).url()}
                    className="w-full h-full object-cover"
                />
                <div className='absolute w-full h-full inset-0 bg-black/30 group-hover:backdrop-blur-sm transition-all items-end justify-end flex-col p-4 hidden group-hover:flex duration-300 opacity-0 group-hover:opacity-100'>
                    <p className='text-white text-xs rounded-sm'>{date}</p>
                    <h1 className="text-3xl font-tenor text-white max-sm:text-xl">{title}</h1>
                    <p className='text-sm text-right font-poppins text-white/70 mt-2 max-sm:text-xs'>{description}</p>
                    <div className="flex justify-start items-center gap-2 w-full my-2">
                    {tags.length > 0 && tags.map((items, i) => (
                        <p className='text-white text-xs mb-2 bg-blue-400/80 px-4 py-1 rounded-sm' key={i}>{items}</p>
                    ))}
                    </div>
                <div className="w-full flex justify-between items-center py-2">
                    <h1 className="text-2xl font-tenor text-white max-sm:text-xl w-full text-left">₹ {price}</h1>
                    {/* <div className="flex"> */}
                        <Link to={link} className="w-1/2 flex justify-center items-center gap-2 border border-white rounded-full py-1 px-2 text-white hover:bg-white hover:text-black">
                            <p className="text-base font-tenor max-sm:text-sm">Buy Now</p>
                            <LucideArrowRight size={16} />
                        </Link>
                            {/* </div> */}
                    </div>
                </div>
            </div>
            <div className={`radial w-5/6 h-14 rounded-full max-sm:h-10 ${full ? "mt-10" : "mt-0"}`}></div>
        </div>
    )
}