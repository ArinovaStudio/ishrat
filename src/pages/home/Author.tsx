import React from 'react'
import { LucideArrowRight } from "lucide-react"
import img from "../../assets/abt.png";
import abt from "../../assets/abt_2.png";
import { Link } from 'react-router-dom';


function Author() {
  return (
    <div className="
      w-screen h-screen flex justify-between items-center
      max-lg:flex-col max-lg:h-auto max-lg:py-20
    ">
      
      {/* LEFT SIDE */}
      <div className="
        w-1/2 h-full py-16 px-12 flex flex-col justify-center items-start
        max-lg:w-full max-lg:h-auto max-lg:items-center max-lg:text-center max-lg:px-10
        max-md:px-6
      ">
        <h1 className="
          font-tenor text-7xl mb-8
          max-lg:text-6xl max-md:text-5xl max-sm:text-4xl
        ">
          <span className="font-semibold">Hi,</span> Everyone
        </h1>

        <p className="
          font-poppins text-2xl text-justify w-4/5 mb-24
          max-xl:text-xl
          max-lg:text-lg max-lg:w-11/12 max-lg:mb-12 max-lg:text-center
          max-md:text-base
        ">
          Born in Kashmir’s mystic valleys, Ishrat Fayaz blends ancient soul with modern grit.
          A fearless writer and advocate, she turns women’s silences into power—her debut 
          <i>Flying with Words</i> echoing untold truths.
        </p>

        <Link to={"/about"} className="
          flex justify-start items-center gap-2 font-teacher text-4xl relative w-fit
          after:absolute after:w-full after:border-b-3 after:border-black after:inset-0 after:-ml-14 after:mt-2
          max-lg:mx-auto max-lg:text-3xl max-md:text-2xl max-sm:text-xl
        ">
          Know More <LucideArrowRight size={20} strokeWidth={1.5} />
        </Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="
        w-1/2 h-5/6 px-16 py-16 grid place-items-center
        max-lg:w-full max-lg:h-auto max-lg:py-10 max-lg:px-10
        max-md:px-6
      ">
        <div className="
          w-5/6 h-full relative bg-white
          max-lg:w-full max-lg:h-[400px]
          max-md:h-80
          max-sm:h-[280px]
        ">
          {/* BACKGROUND BOX */}
          <div className="
            w-96 h-60 absolute top-2/4 -left-1/2
            max-lg:hidden
          ">
          <img
            alt="image"
            src={abt}
            className="w-full h-full object-cover"
          />
          </div>


          {/* IMAGE */}
          <img
            alt="image"
            src={img}
            className="w-full h-full object-cover"
          />

          {/* NAME */}
          <h1 className="
            text-6xl text-black text-right absolute -top-6 -right-4 font-teacher uppercase font-bold
            max-xl:text-5xl
            max-lg:text-4xl max-md:text-3xl max-sm:text-2xl max-sm:-top-4 max-sm:-right-2
          ">
            ISHRAT <br /> FAYAZ
          </h1>
        </div>
      </div>

    </div>
  )
}

export default Author
