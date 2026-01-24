import React from 'react';
import HorizontalProductCard from '../../elements/HoriCard';
import { products } from '../../mock/shop';
import { useSanityQuery } from '../../lib/useSanityQuery';

type ShopType = {
  mainImage: string;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  buylink: string;
}

const MerchantsPage: React.FC = () => {
      const {data, loading, error} = useSanityQuery<ShopType>({type: 'merch'});
      
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div className="min-h-screen h-auto bg-gray-50 py-12 sm:px-20 px-4">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-poppins">
          Our Merchants
        </h1>
        <p className="text-gray-600 text-lg font-poppins">
          Discover amazing products from our trusted merchants
        </p>
      </div>

      {/* Products Grid */}
      <div className="space-y-6">
        {data.length > 0 && data.map((product, index) => (
          <HorizontalProductCard
            key={index}
            image={product.mainImage}
            title={product.title}
            description={product.description}
            originalPrice={product.price}
            discountedPrice={product.discountPrice}
            shopifyLink={product.buylink}
          />
        ))}
      </div>
    </div>
  );
};

export default MerchantsPage;