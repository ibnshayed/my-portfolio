"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { FiCode, FiExternalLink } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

const portfolioItems = [
  {
    id: 1,
    title: "Oushod Sheba",
    category: "Live on Production",
    image: "/images/projects/oushodsheba.png",
    link: "https://oushodsheba.com/",
  },
  {
    id: 2,
    title: "Jatri Rental",
    category: "Live on Production",
    image: "/images/projects/rental.png",
    link: "https://rental.jatri.co/",
  },
  {
    id: 3,
    title: "Jatri Ticket",
    category: "Live on Production",
    image: "/images/projects/jatri_ticket.png",
    link: "https://ticket.jatri.co/",
  },
  {
    id: 4,
    title: "BRTC Online Ticketing",
    category: "Live on Production",
    image: "/images/projects/brtc.png",
    link: "https://ticketing-brtc.gov.bd/",
  },
  {
    id: 5,
    title: "E-Commerce Website",
    category: "Web",
    image: "/images/projects/resized-ecommerce.jpeg",
    code: "https://github.com/ibnshayed/E-Commerce-Django-and-ReactJs",
  },
  {
    id: 6,
    title: "LoopLab",
    category: "Web",
    image: "/images/projects/resized-looplab.jpeg",
    link: "https://ibnshayed.github.io/LoopLab/",
    code: "https://github.com/ibnshayed/LoopLab",
  },
  {
    id: 7,
    title: "Glozzom",
    category: "Web",
    image: "/images/projects/resized-glozzom.jpeg",
    link: "https://ibnshayed.github.io/Glozzom/",
    code: "https://github.com/ibnshayed/Glozzom",
  },
  {
    id: 8,
    title: "Mizuxe",
    category: "Web",
    image: "/images/projects/resized-mizuze.jpeg",
    link: "https://ibnshayed.github.io/Mizuxe/",
    code: "https://github.com/ibnshayed/Mizuxe/",
  },
  {
    id: 9,
    title: "Grill House",
    category: "PSD To HTML",
    image: "/images/projects/resized-grillhouse.jpeg",
    link: "https://ibnshayed.github.io/GillHouse/",
    code: "https://github.com/ibnshayed/GillHouse/",
  },
  {
    id: 10,
    title: "Cuda",
    category: "PSD To HTML",
    image: "/images/projects/resized-cuda.jpeg",
    link: "https://ibnshayed.github.io/Cuda/",
    code: "https://github.com/ibnshayed/Cuda/",
  },
  {
    id: 11,
    title: "Dhaka Ideal School",
    category: "Web",
    image: "/images/projects/resized-idealschool.jpeg",
    link: "https://ibnshayed.github.io/School-Website/",
    code: "https://github.com/ibnshayed/School-Website/",
  },
  {
    id: 12,
    title: "Construct",
    category: "PSD To HTML",
    image: "/images/projects/resized-construct.jpeg",
    link: "https://ibnshayed.github.io/construct/",
    code: "https://github.com/ibnshayed/construct/",
  },
];

const categories = ["All", "Live on Production", "Web", "PSD To HTML"];

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <SectionWrapper title="Works" id="works">
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="mb-12 flex justify-center">
            <ul className="flex space-x-6 rounded-full bg-gray-800 px-4 py-2 shadow-md">
              {categories.map((filter) => (
                <li key={filter}>
                  <motion.button
                    onClick={() => setActiveFilter(filter)}
                    className={`cursor-pointer rounded-full px-6 py-2 text-lg font-semibold text-white transition-all duration-300 ease-in-out ${
                      activeFilter === filter
                        ? "bg-gradient-to-r from-indigo-700 to-blue-900"
                        : "hover:bg-gray-900"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {filter}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio Grid */}
          <motion.div
            ref={ref}
            layout
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl bg-black/50 shadow-lg transition-shadow duration-300 hover:shadow-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  layout
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="transform transition-transform duration-300 group-hover:scale-105"
                      fill
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-400">{item.category}</p>
                  </div>

                  {/* Hover Effect for Buttons */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center gap-4 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded bg-gradient-to-r from-indigo-700 to-blue-900 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700"
                      >
                        <FiExternalLink /> View
                      </a>
                    )}
                    {item.code && (
                      <a
                        href={item.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded bg-gray-200 px-4 py-2 text-gray-800 transition-colors duration-300 hover:bg-gray-300"
                      >
                        <FiCode /> Code
                      </a>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Works;
