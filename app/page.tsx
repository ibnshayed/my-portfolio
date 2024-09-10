"use client";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import TSParticles from "./_components/TSParticles";

export default function Home() {
  return (
    <>
      {/* side bar */}
      <div></div>

      {/*  */}
      <div>
        {/* banner */}
        <div className="relative h-screen bg-[url('/images/banner2.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
          <TSParticles />
          <div className="absolute left-[15%] top-[30%]">
            <p className="text-7xl font-bold text-white">Emran Ibn Shayed</p>
            <div className="ml-1 mt-5 flex space-x-2 text-3xl text-white">
              <p>I{"'"}m a</p>
              <ReactTyped
                strings={["Software Engineer", "Full Stack Developer"]}
                typeSpeed={50}
                backSpeed={50}
                backDelay={3000}
                loop
                className="underline"
              />
            </div>
          </div>
          <p className="absolute bottom-10 left-1/2 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-transparent py-2 text-center text-2xl font-bold text-white shadow-lg shadow-cyan-300/50">
            #EIS
          </p>
        </div>

        <div className="mx-auto w-3/4 py-20">
          <div>
            <p className="text-center text-5xl font-bold">ABOUT</p>
            <div className="mt-2 flex items-center justify-center space-x-5">
              <div className="h-px w-60 rounded-2xl bg-gray-200"></div>
              <div className="size-1 rounded-full bg-gray-200 ring-2 ring-gray-200 ring-offset-2"></div>
              <div className="h-px w-60 rounded-2xl bg-gray-200"></div>
            </div>
          </div>
          <p className="mt-5 text-justify antialiased">
            <span className="font-serif text-6xl">I</span> am a seasoned Senior
            Node.js Backend Developer with about 3 years of hands-on experience
            designing, building, and optimizing server-side solutions. With a
            passion for innovation and a deep understanding of Node.js, I have
            consistently delivered high-performance, scalable, and secure
            backend systems for various applications. My expertise extends
            beyond coding to encompass problem-solving, teamwork, and project
            leadership. I am dedicated to driving success through technology and
            mentoring the next generation of developers. My proven track record
            and commitment to excellence make me a valuable asset for any
            organization aiming to thrive in the digital landscape.
          </p>

          <div className="mt-10 flex space-x-20">
            <div className="relative h-[450px] w-[380px]">
              <Image
                src={"/images/my-image.jpg"}
                fill
                alt={"my image"}
                className="rounded-2xl border-[1px] border-b-8 border-cyan-600 shadow-xl shadow-cyan-600/50"
              />
            </div>
            <div className="">
              <p className="text-3xl font-bold">Full Stack Developer</p>

              <div className="mt-5 grid grid-cols-2 gap-x-40 gap-y-2">
                <p className="text-lg">
                  <strong>University:</strong>&nbsp;&nbsp; Southeast University
                </p>
                <p className="text-lg">
                  <strong>Degree:</strong>&nbsp;&nbsp; B.Sc. in CSE
                </p>
                <p className="text-lg">
                  <strong>Email:</strong>&nbsp;&nbsp; ibnshayed@gmail.com
                </p>
                <p className="text-lg">
                  <strong>Mobile:</strong>&nbsp;&nbsp; +880-16859-66035
                </p>
              </div>
              <div className="mt-10 flex items-center justify-center">
                <button className="w-[300px] rounded-full bg-blue-500 py-2 text-lg text-white shadow-lg shadow-blue-500/50">
                  RESUME
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
