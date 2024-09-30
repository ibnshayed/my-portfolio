"use client"; // Enable client-side rendering for animations

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";

const timelineData = [
  {
    year: "March 2024 - Present",
    title: "Senior Software Engineer",
    company: "Nifty IT Solution LTD, Dhaka, Bangladesh",
    description:
      "Leading a team to develop mission-critical financial applications, optimizing performance, and implementing advanced caching strategies.",
    details: `
      - Reduced processing time by 50% for a financial analytics platform.
      - Developed real-time data analysis systems to enhance decision-making for clients.
    `,
    type: "professional",
  },
  {
    year: "Jan 2023 - Dec 2023",
    title: "Senior Software Engineer",
    company: "Jatri, Dhaka, Bangladesh",
    description:
      "Led the backend development for the Water Transport Project, providing technical leadership and mentorship to junior developers.",
    details: `
      - Optimized schema design, reducing query time by 30%.
      - Led backend integration with various external APIs and services.
    `,
    type: "professional",
  },
  {
    year: "Aug 2021 - Dec 2022",
    title: "Software Engineer",
    company: "Jatri, Dhaka, Bangladesh",
    description:
      "Contributed to digital ticketing solutions and fleet management software, improving the user experience for commuters.",
    details: `
      - Designed scalable architectures for microservices.
      - Improved ticketing system response times by 20%.
    `,
    type: "professional",
  },
  {
    year: "2017 - 2020",
    title: "B.Sc. in Computer Science and Engineering",
    company: "Southeast University, Dhaka, Bangladesh",
    description:
      "Graduated with a GPA of 3.74/4.00, specializing in data structures, algorithms, and distributed systems.",
    details: `
      - Published research on distributed computing algorithms.
      - Awarded Dean’s List for academic excellence.
    `,
    type: "education",
  },
  {
    year: "2013 - 2015",
    title: "HSC in Science",
    company: "Dhaka Imperial College, Dhaka, Bangladesh",
    description:
      "Graduated with a GPA of 5.00/5.00, focusing on mathematics and science.",
    details: `
      - Participated in national-level science and coding competitions.
      - Top 1% in national board exams.
    `,
    type: "education",
  },
  {
    year: "2011 - 2013",
    title: "SSC in Science",
    company: "Siraj Mia Memorial Model School, Dhaka, Bangladesh",
    description:
      "Graduated with a GPA of 4.94/5.00, with a focus on core science subjects.",
    details: `
      - Secured top marks in math and science subjects.
      - Led the school’s coding club to regional competitions.
    `,
    type: "education",
  },
];

const Timeline = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const itemVariants = (isLeft) => ({
    hidden: { opacity: 0, y: 50, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, y: 0, x: 0 },
  });

  return (
    <SectionWrapper id="Resume" title="Resume">
      <div className="relative">
        <div ref={containerRef}>
          {timelineData.map((event, index) => {
            const isLeft = index % 2 === 0; // Alternate left and right
            return (
              <motion.div
                key={index}
                className={`mb-10 flex w-full ${isLeft ? "justify-start" : "justify-end"}`}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={itemVariants(isLeft)}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3,
                  ease: [0.6, -0.05, 0.01, 0.99],
                }}
              >
                {/* Wrapper for each event */}
                <div className="relative w-1/2 p-4">
                  {/* Event Content */}
                  <div
                    className={`rounded-lg bg-gradient-to-l ${
                      event.type === "professional"
                        ? "from-gray-900 to-gray-800"
                        : "from-purple-800 to-indigo-900"
                    } p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl ${
                      isLeft ? "text-left" : "text-right"
                    }`}
                  >
                    <span className="font-bold text-blue-400">
                      {event.year}
                    </span>
                    <h3 className="mb-1 text-2xl font-semibold text-white">
                      {event.title}
                    </h3>
                    <h4 className="mb-2 text-lg font-medium text-gray-400">
                      {event.company}
                    </h4>
                    <p className="text-gray-300">{event.description}</p>
                    <p className="mt-2 whitespace-pre-line text-sm text-gray-400">
                      {event.details}
                    </p>
                  </div>
                </div>

                {/* Timeline Icon - Positioned in the center of the vertical line */}
                <div className="absolute left-1/2 z-10 h-10 w-10 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 shadow-xl"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Center Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transform bg-gray-500"></div>
      </div>
    </SectionWrapper>
  );
};

export default Timeline;
