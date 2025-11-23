import React from "react";

function Main() {
  return (
    <div className="w-screen h-screen max-lg:h-auto max-lg:pb-20 overflow-hidden">

      {/* GIANT HEADING */}
      <h1
        className="
          font-bayon text-[20rem] pt-4 leading-normal uppercase text-center w-full
          max-xl:text-[16rem]
          max-lg:text-[12rem]
          max-md:text-[8rem]
          max-sm:text-[5rem] max-sm:leading-tight
        "
      >
        ISHRAT FAYAZ
      </h1>

      {/* CONTENT WRAPPER */}
      <div
        className="
          w-full h-4/5 relative z-50 -mt-80 flex justify-around items-start
          max-lg:flex-col max-lg:-mt-10 max-lg:items-center max-lg:h-auto
        "
      >

        {/* LEFT TEXT (PARAGRAPH) */}
        <div
          className="
            w-1/3 h-full flex justify-center items-center px-10
            max-lg:w-4/5 max-lg:h-auto max-lg:px-6 max-lg:text-center
            max-lg:order-3
          "
        >
          <p className="text-xl font-poppins max-md:text-base max-sm:text-sm">
            Shaped by Kashmir’s enigmatic landscapes, Ishrat Fayaz crafts
            stories where quiet truths and bold emotions collide. A devoted
            writer and advocate, she amplifies women’s voices, with Flying with
            Words unveiling strength, mystery, and the shadows behind
            resilience.
          </p>
        </div>

        {/* IMAGE — should appear second on mobile */}
<div
  className="
    w-1/3 h-full
    max-lg:w-4/5 max-lg:h-auto
    max-md:h-auto
    max-sm:h-auto
    max-lg:order-2
  "
>
  <img
    src="/image.png"
    alt="image"
    className="
      w-full h-full object-cover rounded-xl
      max-lg:h-auto max-lg:object-contain
    "
  />
</div>


        {/* RIGHT STATS — should appear LAST on mobile */}
        <div
          className="
            w-1/3 h-full flex flex-col justify-end py-12 items-start space-y-8 px-10 gap-8
            max-lg:w-4/5 max-lg:h-auto max-lg:mt-10 max-lg:space-y-6 max-lg:px-6 max-lg:items-center max-lg:text-center
            max-lg:order-4
          "
        >
          <div>
            <h1 className="text-5xl font-poppins font-bold max-md:text-4xl max-sm:text-3xl">5+</h1>
            <p className="text-3xl font-teacher text-neutral-500 uppercase font-semibold max-md:text-2xl max-sm:text-xl">Years of Experience</p>
          </div>

          <div>
            <h1 className="text-5xl font-poppins font-bold max-md:text-4xl max-sm:text-3xl">100+</h1>
            <p className="text-3xl font-teacher text-neutral-500 uppercase font-semibold max-md:text-2xl max-sm:text-xl">PUBLISHED ARTICLES</p>
          </div>

          <div>
            <h1 className="text-5xl font-poppins font-bold max-md:text-4xl max-sm:text-3xl">50000+</h1>
            <p className="text-3xl font-teacher text-neutral-500 uppercase font-semibold max-md:text-2xl max-sm:text-xl">READERS INSPIRED</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Main;
