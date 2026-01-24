import React from 'react'
import { useSanityQuery } from '../../lib/useSanityQuery'
import BlogsCard, { BLCards } from '../../elements/Blogs'
import { Link } from 'react-router-dom';
import { LucideArrowRight } from 'lucide-react';

type BlogType = {
  mainImage: string;
  title: string;
  description: string;
  slug: {current: string}
  publishedAt: string
}


function Blogs() {
    const {data, loading, error} = useSanityQuery<BlogType>({type: 'blogs', limit: 3});
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='w-screen h-auto mb-12'>
        <h1 className='font-poppins text-5xl font-bold px-10 uppercase'>Blogs</h1>
        <div className="px-10 w-full flex justify-around items-start py-14">
            {data.length > 0 && data.slice(0, 3).map((items, i) => (
                <BLCards 
                    key={i}
                    description={items.description}
                    publishedAt={new Date(items.publishedAt).toDateString()}
                    image={items.mainImage}
                    slug={items.slug.current}
                    title={items.title}
                    />
            ))}
        </div>
            <div className="w-full grid place-items-center pt-14">
                <Link to={"/blogs"} className="
                    w-fit border-2 border-black rounded-full cursor-pointer px-10 py-1
                    flex items-center justify-center gap-4 transition-all
                    hover:bg-black hover:text-white
                    max-sm:px-6
                ">
                    <p className="font-tenor max-sm:text-sm">View All</p>
                    <LucideArrowRight size={16} />
                </Link>
            </div>
    </div>
  )
}

export default Blogs