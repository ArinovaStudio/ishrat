import React from 'react'
import { products } from '../../mock/shop'
import ProductCard from '../../elements/ProductCard'
import { LucideArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSanityQuery } from '../../lib/useSanityQuery'

type ShopType = {
  mainImage: string;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  buylink: string;
}


function Shop() {
    const {data, loading, error} = useSanityQuery<ShopType>({type: 'merch', limit: 4});
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='w-screen h-screen'>
        <h1 className='font-poppins text-5xl font-bold px-10 uppercase'>Our Merch</h1>
        <div className="px-12 w-full flex justify-around items-start py-14">
            {data.length > 0 && data.slice(0, 4).map((product, i) => (
                <ProductCard 
                    key={i}
                    image={product.mainImage}
                    title={product.title}
                    description={product.description}
                    originalPrice={product.price}
                    discountedPrice={product.discountPrice}
                    shopifyLink={product.buylink}
                />
            ))}
        </div>
            <div className="w-full grid place-items-center pt-10">
                <Link to={"/shop"} className="
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

export default Shop