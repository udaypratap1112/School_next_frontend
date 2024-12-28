import React from "react";

const Process = () => {
  return (
    <div className=" my-[5%]">
      <h6 className="text-center text-2xl mb-4">
        Simple, Selective, Effective
      </h6>
      <h3 className="text-5xl font-semibold text-center">Adimission Process</h3>
      <div className="flex items-center justify-between max-w-[1100px] m-auto py-10">
        <div className="border max-w-80 aspect-[3/4] overflow-hidden" style={{ borderRadius: "50% 50% 2% 2% / 35% 35% 2% 2%" }} >
          <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>

        <span className="inline-block w-[1px] min-h-[200px] bg-zinc-300"></span>

        <div className=" max-w-[500px]">
          <h6 className="text-3xl font-semibold mb-6">1. Tell Us your Story</h6>
          <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam incidunt, exercitationem nulla nesciunt corrupti omnis expedita cupiditate, voluptatibus assumenda natus distinctio. Et deserunt quidem pariatur voluptatem provident saepe doloribus ullam.</p>
          <button className="mt-6 bg-greenDark text-white px-7 py-2 rounded-3xl">Let&apos;s Connect</button>
        </div>
        
        
      </div>
    </div>
  );
};

export default Process;
