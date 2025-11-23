import React from "react";
import { books } from "../../mock/books";
import { BooksCard } from "../../elements/BooksCard";

function BooksAll() {
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
          {books.length > 0 &&
            books.map((items, i) => (
              <BooksCard
                key={i}
                full={true}
                title={items.title}
                image={items.image}
                description={items.description}
                link={items.link}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default BooksAll;
