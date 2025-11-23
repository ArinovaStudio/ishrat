import React from 'react'
import imge from "../../assets/butterfly.png";
import women from "../../assets/women.png";
import banner from "../../assets/poster.png";

function Hero() {
  return (
    <div className='w-screen h-screen max-lg:h-auto max-lg:pb-16'>

      {/* MAIN HEADING */}
      <h1 className='
        text-8xl mt-6 font-tenor tracking-wider 
        bg-linear-to-b from-black to-neutral-400 bg-clip-text text-transparent text-center
        max-xl:text-7xl
        max-lg:text-6xl
        max-md:text-5xl
        max-sm:text-4xl max-sm:mt-10
      '>
        Story that <br /> Stay with you!
      </h1>


      {/* 3-COLUMN CONTAINER */}
      <div className="
        w-full h-3/4 flex justify-between items-center
        max-lg:flex-col max-lg:h-auto max-lg:mt-10
      ">

        {/* LEFT SECTION */}
        <div className="
          w-1/3 h-full px-14 flex justify-center items-start flex-col
          max-lg:w-4/5 max-lg:h-auto max-lg:items-center max-lg:text-center max-lg:px-6
        ">
          <h1 className="
            font-serif text-5xl bg-linear-to-b from-black to-neutral-400 bg-clip-text text-transparent
            max-md:text-3xl
            max-sm:text-2xl
          ">
            Flying with Words
          </h1>

          <p className="
            text-neutral-400 text-base font-poppins mt-2
            max-lg:text-center max-md:text-xs
          ">
            Lorem ipsum dolor sit amet consectetur. Suspendisse amet lacinia neque sed.
            Vitae molestie elit fringilla sem.
          </p>
        </div>


        {/* MIDDLE ART SECTION */}
        <div className="
          w-1/3 h-full flex justify-center items-center relative
          max-lg:w-4/5 max-lg:h-[350px]
          max-md:h-[300px]
          max-sm:h-[260px]
        ">
          <div className="w-full h-4/5 radialRed rounded-full max-sm:h-3/4"></div>

          <div className="
            w-16 h-16 absolute inset-24 top-20 z-50
            max-md:w-10 max-md:h-10 max-sm:w-8 max-sm:h-8
          ">
            <img 
            src={imge}
            alt='burrerlfy'
            className='w-full h-full object-cover'
            />

          </div>

          <div className="
            w-3/5 h-3/5 absolute inset-1/6 top-1/5
            max-md:w-2/3 max-md:h-2/3
            max-sm:w-3/4 max-sm:h-3/4
          ">
            <img 
            src={women}
            alt='poster'
            className='w-full h-full object-contain'
            />

          </div>
        </div>


        {/* RIGHT SECTION BOX */}
        <div className="
          w-1/3 h-full flex justify-center items-center relative
          max-lg:w-4/5 max-lg:h-[250px]
        ">
          <div className="
            w-1/3 h-1/3
            max-md:w-1/2 max-md:h-1/2
            max-sm:w-2/3 max-sm:h-2/3
          ">
            <img 
            src={banner}
            alt='burrerlfy'
            className='w-full h-full object-contain'
            />

          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
