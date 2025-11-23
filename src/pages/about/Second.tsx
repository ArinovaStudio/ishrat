import React from "react";

function Second() {
  return (
    <div className="
      w-screen h-screen flex justify-between items-start
      max-lg:flex-col max-lg:h-auto max-lg:pb-20
    ">
      
      {/* LEFT SECTION (TEXT) */}
      <div className="
        w-1/2 h-full relative px-14 py-10
        max-xl:px-12
        max-lg:w-full max-lg:h-auto max-lg:px-10 max-lg:pt-16
        max-md:px-6
      ">
        <h1 className="
          font-tenor text-8xl uppercase mb-6
          max-xl:text-7xl
          max-lg:text-6xl 
          max-md:text-5xl
          max-sm:text-4xl
        ">
          Who I am?
        </h1>

        <p className="
          text-xl font-poppins 
          max-xl:text-lg
          max-md:text-base
          max-sm:text-sm
        ">
          Born amidst the enchanting valleys of Kashmir, Ishrat Fayaz brings a
          distinctive voice to contemporary literature—one that blends the soul
          of ancient storytelling with the pulse of modern life. Her writing is
          deeply rooted in the cultural richness of her homeland, drawing
          inspiration from its landscapes, traditions, and the quiet resilience
          of its people. 
          <br /> <br /> 
          Her literary journey reignited in 2019, a year when the
          world stood still but her pen surged forward. With bold honesty and
          emotional depth, Ishrat began crafting stories that gave voice to
          women's experiences—unfiltered, unflinching, and unforgettable. What
          began as a personal act of courage soon blossomed into published
          articles, digital features. 
          <br /> <br /> 
          Today, Ishrat writes full-time, exploring
          themes of empowerment, identity, and the human condition through
          poetry, dark humor, and psychological thrillers. Her work is a
          celebration of transformation—where pain becomes prose and silence
          turns into strength. Beyond the page, Ishrat is a dynamic YouTuber and
          passionate social activist. Her platform sparks vital conversations
          around menstrual health, self-care, and personal empowerment, while
          her outreach work educates and uplifts adolescent girls and rural
          women across communities. Whether through verse, video, or advocacy,
          Ishrat Fayaz is on a mission to ensure every woman feels seen, heard,
          and inspired to rise. Her debut, Flying with Words, stands as a
          lyrical testament to cultural heritage, emotional resilience, and the
          power of storytelling to heal and elevate.
        </p>
      </div>

      {/* RIGHT SECTION (IMAGE) */}
      <div className="
        w-1/2 h-full relative px-14 py-10
        max-lg:w-full max-lg:h-[400px] max-lg:px-10
        max-md:h-[320px] max-md:px-6
        max-sm:h-[250px]
      ">
        <img 
          alt="okay"
          src="/grid.png"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

    </div>
  );
}

export default Second;
