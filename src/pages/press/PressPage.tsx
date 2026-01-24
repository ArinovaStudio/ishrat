import React from 'react';
import { useSanityQuery } from '../../lib/useSanityQuery';
import PressCard from '../../elements/Press';

type PressType = {
  mainImage: string;
  title: string;
  description: string;
  slug: {current: string}
  publishedAt: string
}


const PressPage: React.FC = () => {
      const {data, loading, error} = useSanityQuery<PressType>({type: 'press'});
      
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div className="min-h-screen h-auto bg-gray-50 py-12 sm:px-20 px-4">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-poppins">
          Press Releases
        </h1>
        <p className="text-gray-600 text-lg font-poppins">
            Stay updated with latest news and press releases
        </p>
      </div>

      {/* Products Grid */}
        <div className="lg:px-10 w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:pr-24 lg:gap-40 gap-10 py-14">
            {data.length > 0 && data.map((items, i) => (
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
    </div>
  );
};

export default PressPage;