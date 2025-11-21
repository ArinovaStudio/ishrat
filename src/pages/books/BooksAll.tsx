import React from "react";
import { books } from "../../mock/books";
import { BooksCard } from "../../elements/BooksCard";

function BooksAll() {
  return (
    <>
      <div className="w-screen min-h-screen h-auto">
        <h1 className="font-poppins uppercase text-6xl p-6 font-bold">
          B o o k s
        </h1>
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
