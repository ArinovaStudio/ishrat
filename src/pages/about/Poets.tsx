import React, { useEffect, useState } from "react";

// ✅ 1. DATA ARRAY
const poetsData = [
  {
    image: "https://picsum.photos/1080/1080?1",
    title: "A Kind Soul",
    quote:
      '"In the tapestry of life, your kindness is a thread that weaves warmth and light into the hearts of those around you."',
  },
  {
    image: "https://picsum.photos/1080/1080?2",
    title: "Silent Strength",
    quote:
      '"Strength isn’t always loud — sometimes it’s the quiet choice to keep going, even when the world feels heavy."',
  },
  {
    image: "https://picsum.photos/1080/1080?3",
    title: "Heart of Gold",
    quote:
      '"Your compassion leaves a footprint on every soul you meet — gentle yet unforgettable."',
  },
];

function Poets() {
  const [index, setIndex] = useState(0);

  // ✅ 2. Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % poetsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen max-lg:h-[80vh] overflow-hidden">

      {/* SLIDES */}
      {poetsData.map((item, i) => (
        <div
          key={i}
          className={`
            absolute inset-0 w-full h-full transition-opacity duration-1000
            ${i === index ? "opacity-100 z-50" : "opacity-0 z-10"}
          `}
        >
          {/* Background Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center gap-4 text-white px-10">
            <h1 className="font-serif leading-none text-6xl max-md:text-5xl max-sm:text-4xl">
              "
            </h1>

            <h1
              className="
                font-tenor text-8xl tracking-tighter
                max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-3xl
              "
            >
              {item.title}
            </h1>

            <p
              className="
                font-poppins text-center font-light w-5/6 text-2xl
                max-xl:text-xl max-lg:text-lg max-md:text-base max-sm:text-sm
              "
            >
              {item.quote}
            </p>
          </div>
        </div>
      ))}

      {/* OPTIONAL: Dots Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-[60]">
        {poetsData.map((_, i) => (
          <div
            key={i}
            className={`
              w-3 h-3 rounded-full transition-all
              ${i === index ? "bg-white" : "bg-white/40"}
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default Poets;
