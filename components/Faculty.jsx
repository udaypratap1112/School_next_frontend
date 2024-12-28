import Image from "next/image";
import React from "react";

const Faculty = () => {
  return (
    <div className="bg-greenDark text-white py-20">
      <h4 className="text-5xl font-semibold text-center">
        Meet the <span className="text-lightGreen text-semibold text-6xl">Coaches</span>
      </h4>
      <p className="text-center max-w-[800px] m-auto mt-5 text-xl font-thin">
        {" "}
        You&apos;ll find our team of coaches are dedicated to helping students
        overcome both external challenges and internal barriers like self-doubt
        and fear, bulding the confindence and skills needed to stop into
        leadership and thrive
      </p>

      <main className="flex px-5 justify-center gap-10 my-48 items-center">
        <div className="w-72 relative aspect-[3/4] bg-zinc-500 rounded-b-lg rounded-l-lg rounded-tr-[50%] hover:scale-125 transition-all  grow-0 overflow-hidden">
          <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill ></img>
          <h5 className="absolute bottom-5 left-3 text-3xl font-bold">Tanvi</h5>
        </div>
        <div className="w-72 relative aspect-[3/4] bg-zinc-500 rounded-b-lg rounded-l-lg rounded-tr-[50%] hover:scale-125 transition-all  grow-0 overflow-hidden">
          <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/7647990/pexels-photo-7647990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill ></img>
          <h5 className="absolute bottom-5 left-3 text-3xl font-bold">Tanvi</h5>
        </div>
        <div className="w-72 relative aspect-[3/4] bg-zinc-500 rounded-b-lg rounded-l-lg rounded-tr-[50%] hover:scale-125 transition-all  grow-0 overflow-hidden">
          <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill ></img>
          <h5 className="absolute bottom-5 left-3 text-3xl font-bold">Tanvi</h5>
        </div>
        <div className="w-72 relative aspect-[3/4] bg-zinc-500 rounded-b-lg rounded-l-lg rounded-tr-[50%] hover:scale-125 transition-all  grow-0 overflow-hidden">
          <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600" fill ></img>
          <h5 className="absolute bottom-5 left-3 text-3xl font-bold">Tanvi</h5>
        </div>
        <div className="w-72 relative aspect-[3/4] bg-zinc-500 rounded-b-lg rounded-l-lg rounded-tr-[50%] hover:scale-125 transition-all  grow-0 overflow-hidden">
          <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/5212323/pexels-photo-5212323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" fill ></img>
          <h5 className="absolute bottom-5 left-3 text-3xl font-bold">Tanvi</h5>
        </div>
      </main>
    </div>
  );
};

export default Faculty;
