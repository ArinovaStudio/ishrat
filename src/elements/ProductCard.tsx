import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  shopifyLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  originalPrice,
  discountedPrice,
  shopifyLink
}) => {
  const discountPercent = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  
  const handleBuyNow = () => {
    window.open(shopifyLink, '_blank');
  };
  
  return (
    <div className="bg-white overflow-hidden w-full h-[600px] max-w-sm">
      {/* Product Image */}
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover"
        />
        {discountPercent > 0 && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-sm font-bold">
            -{discountPercent}%
          </div>
        )}
      </div>
      
      {/* Product Details */}
      <div className="p-6 px-0">
        <h2 className="text-2xl font-bold text-gray-900 mb- font-poppins leading-tight">
          {title.slice(0, 50)}{title.length > 50 ? '...' : ''}
        </h2>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed font-poppins">
          {description.slice(0, 100)}{description.length > 100 ? '...' : ''}
        </p>
        
        {/* Price Section */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-gray-900">
              ${discountedPrice.toFixed(2)}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          </div>
          <p className="text-green-600 text-sm font-semibold mt-1">
            Save ${(originalPrice - discountedPrice).toFixed(2)}
          </p>
        </div>
        
        {/* Buy Now Button */}
        <button
          onClick={handleBuyNow}
          className="w-full bg-black hover:bg-black text-white font-bold py-4 px-6 transition-colors duration-200 flex items-center justify-center gap-2 text-lg"
        >
          <ShoppingCart size={24} />
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;