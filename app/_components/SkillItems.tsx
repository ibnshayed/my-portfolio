"use client"; // Ensures this component is treated as a client component

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface Skill {
  title: string;
  uri: string;
}

interface SkillItemsProps {
  title: string;
  skills: Skill[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut", // Built-in Framer Motion easing for a modern look
    },
  },
};

const hoverEffect = {
  scale: 1.05,
  rotate: 3,
  transition: {
    duration: 0.3,
    ease: "easeInOut", // Using a smoother ease here
  },
};

const SkillItems = ({ title, skills }: SkillItemsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" });

  return (
    <div>
      <motion.p
        className="text-2xl font-bold text-cyan-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.p>

      <motion.div
        ref={ref}
        className="grid auto-cols-max grid-flow-col gap-y-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skills.map((skillItem) => (
          <motion.div
            key={skillItem.title}
            className="group flex flex-col items-center rounded-2xl p-5 transition-all duration-500 ease-in-out hover:bg-gray-800 hover:shadow-lg"
            variants={itemVariants}
            whileHover={hoverEffect}
          >
            <motion.div
              className="overflow-hidden"
              whileHover={{ rotate: 15 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={skillItem.uri}
                alt={skillItem.title}
                width={80}
                height={80}
                className="rounded-2xl transition-all duration-300 ease-in-out"
              />
            </motion.div>
            <motion.p
              className="mt-2 text-center font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {skillItem.title}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillItems;
