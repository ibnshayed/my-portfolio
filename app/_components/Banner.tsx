"use client";
import { ReactTyped } from "react-typed";
import TSParticles from "./TSParticles";

const Banner = () => {
  return (
    <div className="relative h-screen bg-[url('/images/banner2.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <TSParticles />
      <div className="absolute left-[15%] top-[30%]">
        <p className="text-8xl font-bold text-white">Emran Ibn Shayed</p>
        <div className="ml-1 mt-5 flex space-x-2 text-3xl text-white">
          <p>I{"'"}m a</p>
          <ReactTyped
            strings={[
              "Software Engineer",
              "Full Stack Developer",
              "React Native Developer",
              "Freelancer",
            ]}
            typeSpeed={50}
            backSpeed={50}
            backDelay={3000}
            loop
            className="text-cyan-500 underline"
          />
        </div>
      </div>
      <p className="absolute bottom-10 left-1/2 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-transparent py-2 text-center text-2xl font-bold text-white shadow-lg shadow-cyan-300/50">
        #EIS
      </p>
    </div>
  );
};

export default Banner;
