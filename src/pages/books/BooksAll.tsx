import React from "react";
import { books } from "../../mock/books";
import { BooksCard } from "../../elements/BooksCard";
import { useSanityQuery } from "../../lib/useSanityQuery";


type BooksType = {
    title: string;
    image: string;
    description: string;
    link: string;
    price: number;
    releasedAt: string;
    tags: string[];
}


function BooksAll() {
      const {data, loading, error} = useSanityQuery<BooksType>({type: 'book'});
      
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;
      
  return (
    <>
      <div className="w-screen min-h-screen h-auto">
        <h1 className="font-poppins uppercase text-6xl px-6 font-bold">
          B o o k s
        </h1>
                <p className="text-gray-600 text-lg font-poppins px-6">
          Discover amazing products from our trusted merchants
        </p>
        <div className="px-10 py-10 flex justify-center items-start flex-wrap gap-20 w-full">
          {data.length > 0 &&
            data.map((items, i) => (
                        <BooksCard
                            key={i}
                            title={items.title}
                            image={items.image}
                            description={items.description}
                            link={items.link}
                            price={items.price}
                            date={items.releasedAt.split('T')[0]}
                            tags={items.tags}
                        />
            ))}
        </div>
      </div>
    </>
  );
}

export default BooksAll;
