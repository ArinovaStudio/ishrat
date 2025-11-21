import React from 'react';
import { LucideArrowRight } from "lucide-react"
import { books } from '../../mock/books';
import { BooksCard } from '../../elements/BooksCard';



const Books: React.FC = () => {
    return (
        <div className="w-screen h-screen overflow-hidden max-md:h-auto">
            <div className="flex justify-between items-center px-16 py-10 
                max-lg:px-10 
                max-md:px-6 max-md:flex-col max-md:gap-4
                max-sm:px-4
            ">
                <h1 className="font-tenor text-6xl max-md:text-4xl max-sm:text-3xl">My Books</h1>

                <div className="border-2 border-black rounded-full hover:bg-black hover:text-white transition-all cursor-pointer px-10 h-fit py-1 flex items-center justify-center gap-4 max-sm:px-6">
                    <p className="font-tenor max-sm:text-sm">View All</p>
                    <LucideArrowRight size={16} />
                </div>
            </div>


            {/* Books Grid */}
            <div className="
                w-full h-5/6 flex justify-around items-start
                max-lg:gap-6
                max-md:flex-wrap max-md:justify-center max-md:h-auto
                max-sm:flex-wrap max-sm:px-4
            ">
                {
                    books.length > 0 && books.slice(0, 3).map((items, i) => (
                        <BooksCard
                            key={i}
                            title={items.title}
                            image={items.image}
                            description={items.description}
                            link={items.link}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Books;
