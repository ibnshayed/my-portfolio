"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FiDownloadCloud } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" }); // Trigger only once, and slight early trigger

  return (
    <SectionWrapper id="about" title="About">
      <motion.p
        className="text-justify text-2xl antialiased"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
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
      </motion.p>

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
            className="rounded-3xl border-[1px] border-b-8 border-cyan-600 shadow-xl shadow-cyan-600/50"
          />
        </motion.div>
        <div>
          <motion.p
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Full Stack Developer
          </motion.p>

          <div className="mt-5 grid grid-cols-2 gap-x-40 gap-y-2">
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <strong className="text-cyan-500">University:</strong>&nbsp;&nbsp;
              Southeast University
            </motion.p>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <strong className="text-cyan-500">Degree:</strong>&nbsp;&nbsp;
              B.Sc. in CSE
            </motion.p>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <strong className="text-cyan-500">Email:</strong>&nbsp;&nbsp;
              ibnshayed@gmail.com
            </motion.p>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <strong className="text-cyan-500">Mobile:</strong>&nbsp;&nbsp;
              +880-16859-66035
            </motion.p>
          </div>
          <motion.div
            className="mt-40 flex items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <button className="flex items-center justify-center space-x-5 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-600 px-20 py-4 text-4xl text-white shadow-lg shadow-blue-500/50 transition-all duration-300 ease-in-out hover:-translate-y-2">
              <span>Resume</span>
              <FiDownloadCloud />
            </button>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
