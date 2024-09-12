"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="mx-auto w-3/4 py-20">
      <SectionHeader title={"About"} />
      <p className="mt-5 text-justify text-2xl antialiased">
        <span className="font-serif text-6xl">I</span> am a seasoned Senior
        Node.js Backend Developer with about 3 years of hands-on experience
        designing, building, and optimizing server-side solutions. With a
        passion for innovation and a deep understanding of Node.js, I have
        consistently delivered high-performance, scalable, and secure backend
        systems for various applications. My expertise extends beyond coding to
        encompass problem-solving, teamwork, and project leadership. I am
        dedicated to driving success through technology and mentoring the next
        generation of developers. My proven track record and commitment to
        excellence make me a valuable asset for any organization aiming to
        thrive in the digital landscape.
      </p>

      <div className="mt-10 flex space-x-20" ref={ref}>
        <motion.div
          className="relative h-[450px] w-[380px]"
          initial={{ opacity: 0, x: "-100%" }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={"/images/my-image.jpg"}
            fill
            alt={"my image"}
            className="rounded-2xl border-[1px] border-b-8 border-cyan-600 shadow-xl shadow-cyan-600/50"
          />
        </motion.div>
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
          <motion.div
            className="mt-10 flex items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <button className="w-[300px] rounded-full bg-blue-500 py-2 text-lg text-white shadow-lg shadow-blue-500/50">
              RESUME
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
