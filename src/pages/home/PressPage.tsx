import React from 'react'
import { useSanityQuery } from '../../lib/useSanityQuery'
import BlogsCard, { BLCards } from '../../elements/Blogs'
import { Link } from 'react-router-dom';
import { LucideArrowRight } from 'lucide-react';
import PressCard from '../../elements/Press';

type PressType = {
  mainImage: string;
  title: string;
  description: string;
  slug: {current: string}
  publishedAt: string
}


function PressPage() {
    const {data, loading, error} = useSanityQuery<PressType>({type: 'press', limit: 3});
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div className='w-screen h-auto mb-12'>
        <h1 className='font-poppins text-5xl font-bold px-10 uppercase'>Press Release</h1>
        <div className="px-10 w-full flex justify-around items-start py-14">
            {data.length > 0 && data.slice(0, 3).map((items, i) => (
                <PressCard
                key={i}
                title={items.title}
                description={items.description}
                publishedAt={new Date(items.publishedAt).toDateString()}
                mainImage={items.mainImage}
                slug={items.slug}
                />
            ))}
        </div>
            <div className="w-full grid place-items-center pt-14">
                <Link to={"/press-release"} className="
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

export default PressPage