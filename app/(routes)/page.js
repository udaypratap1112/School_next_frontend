import Faculty from "@/components/Faculty";
import Process from "@/components/Process";
import Programs from "@/components/Programs";
import Stats from "@/components/Stats";
import Why from "@/components/Why";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="mx-[1%] overflow-hidden rounded-xl h-[90vh] relative">
        <div className="absolute bottom-24 left-14 backdrop-blur-3xl bg-zinc-700/30 p-16 rounded-lg z-20">
          <h3 className="text-6xl font-bold mb-5 text-white">Embrace your <span className="text-[#d6ff32]">Magic</span></h3>
          <p className="text-white text-xl mb-5">Reclaim your confidence and make empowering decisions <br /> with indvidualized, purpose-driven coaching</p>
          <button className="bg-white px-12 py-3 rounded-3xl">Let&apos;s Connect</button>
        </div>
        <Image className="object-cover" fill="true" src={'https://images.pexels.com/photos/3776136/pexels-photo-3776136.jpeg'} alt="image" priority></Image>
      </div>

      <Stats />
      <Why />
      <Programs/>
      <Process/>
      <Faculty/>
    </div>
  );
}


