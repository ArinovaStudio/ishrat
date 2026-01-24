import React from 'react'
import urlFor from '../lib/ImageBuilder';
import { Link } from 'react-router-dom';

function BlogsCard({image, title, description, slug, publishedAt}: {
    image: string;
    title: string;
    description: string;
    slug: string;
    publishedAt: string;
}) {
  return (
<div
  className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300"
>
  <div
    className="absolute duration-700 group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-[55%] h-[55%] rounded-lg bg-gray-200 shadow-xl"
  >
    <img 
    src={urlFor(image).url()}
    alt='ok'
    />
  </div>

  <div className="">
    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    <p className="text-gray-400 font-poppins mb-2 line-clamp-3 text-sm mt-1">
        {description}
    </p>
    <p className='text-xs text-gray-600 font-medium'>{publishedAt}</p>
  </div>
  <Link to={`${slug}`}
    className="hover:bg-black hover:text-white bg-gray-800 text-gray-50 mt-6 rounded p-2 px-6"
  >
    Read More
  </Link>
</div>

  )
}

export default BlogsCard


export function BLCards({image, title, description, slug, publishedAt}: {
    image: string;
    title: string;
    description: string;
    slug: string;
    publishedAt: string;
}) {
  return (
    <div className="relative">
        <img src={urlFor(image).url()} className="w-full aspect-3/2 lg:aspect-3/4 h-44 lg:h-128 object-cover shadow-lg rounded-2xl" />
        <div className="lg:rounded-l-[30px] lg:rounded-t-[30px] bg-white lg:absolute bottom-8 -right-28 lg:w-76 px-8 py-6 lg:h-96 shadow-2xl">
          <span className="inline-block text-sm text-gray-500">{publishedAt}</span>
          <h2 className="text-lg font-bold leading-tight mt-1.5 mb-2">{title}</h2>
          <p className="inline-block text-blue-400 text-sm capitalize hover:underline">Ishrat Fayaz</p>
          <p className="text-gray-800 my-3 text-sm leading-relaxed">{description}</p>
          <Link to={`/blogs/${slug}`} className="absolute right-4 bottom-4 flex justify-end items-center uppercase text-blue-800 font-semibold text-sm hover:underline"><span className="mr-4 block w-10 h-0.5 bg-blue-800"></span>read more</Link>
        </div>
      </div>
  )
}
