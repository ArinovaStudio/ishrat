import React from 'react';
import { LucideArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';




export const BooksCard = ({ image, title, description, link, full = false }: { image: string, title: string, description: string, link: string, full?: boolean }) => {
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
                    src={image}
                    className="w-full h-full object-cover"
                />
                <div className='absolute w-full h-full inset-0 bg-black/30 items-end justify-end flex-col p-4 hidden group-hover:flex transition-opacity opacity-0 group-hover:opacity-100 duration-500'>
                    <h1 className="text-3xl font-tenor text-white max-sm:text-xl">{title}</h1>
                    <p className='text-sm text-right font-poppins text-white/70 mt-2 max-sm:text-xs'>{description}</p>
                                        <div className="w-full grid place-items-end py-2">
                        <Link to={link} className="
                            w-fit border border-white text-white rounded-full cursor-pointer px-4 h-fit py-1 
                            flex items-center justify-center gap-2 
                            max-sm:px-3 max-sm:py-1
                        ">
                            <p className="text-base font-tenor max-sm:text-sm">Buy Now</p>
                            <LucideArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`radial w-5/6 h-14 rounded-full max-sm:h-10 ${full ? "mt-10" : "mt-0"}`}></div>
        </div>
    )
}