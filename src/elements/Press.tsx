import React from "react";
import urlFor from "../lib/ImageBuilder";
import { Link } from "react-router-dom";

function PressCard({title, slug, description, mainImage, publishedAt}: {
    title: string;
    slug: {current: string};
    description: string;
    mainImage: string;
    publishedAt: string;
}) {
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-gradient-to-br from-white to-gray-50 bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative mx-4 -mt-6 h-52 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
        <div className="absolute inset-0">
            <img 
            src={urlFor(mainImage).url()}
            alt="Image"
            className="w-full h-full object-cover"
            />
        </div>
      </div>
      <div className="p-6">
        <p className="block font-sans font-semibold text-xs my-1 text-gray-500 antialiased">
            {publishedAt}
        </p>
        <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-900 antialiased group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h5>
        <p className="block font-sans text-xs mt-1 font-normal text-gray-500 antialiased">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0">
          <Link to={`/press-release/${slug.current}`} className="relative flex items-center gap-2 cursor-pointer">
        <button className="cursor-pointer group relative w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-linear-to-br from-gray-950 to-gray-400 hover:shadow-lg hover:shadow-black/30 duration-300 hover:-translate-y-0.5 transition-all">
            Read More
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
            >
              <path
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
        </button>
          </Link>
      </div>
    </div>
  );
}

export default PressCard;
