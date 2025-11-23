import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface HorizontalProductCardProps {
  image: string;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  shopifyLink: string;
}

const HorizontalProductCard: React.FC<HorizontalProductCardProps> = ({
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
    <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-9xl">
      <div className="flex flex-col md:flex-row">
        {/* Product Image Section */}
        <div className="relative md:w-80 h-64 md:h-auto shrink-0 bg-gray-50">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          {discountPercent > 0 && (
            <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1.5 text-xs font-bold">
              {discountPercent}% OFF
            </div>
          )}
        </div>
        
        {/* Product Details Section */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            {/* Title */}
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                {title}
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Price and Button Section */}
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Price Section */}
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-gray-900">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                </div>
                <p className="text-green-600 text-sm font-semibold">
                  You save ${(originalPrice - discountedPrice).toFixed(2)} ({discountPercent}%)
                </p>
              </div>
              
              {/* Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="bg-black hover:bg-neutral-600 text-white font-bold py-3 px-8 transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <ShoppingCart size={20} />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProductCard;

// Example usage:
// <HorizontalProductCard
//   image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop"
//   title="Premium Wireless Headphones"
//   description="Experience unparalleled sound quality with our premium wireless headphones. Featuring advanced active noise cancellation technology, 30-hour battery life, and premium materials for ultimate comfort during extended listening sessions."
//   originalPrice={299.99}
//   discountedPrice={199.99}
//   shopifyLink="https://your-store.myshopify.com/products/premium-headphones"
// />