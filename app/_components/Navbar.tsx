import { motion } from "framer-motion";
import AnimatedLink from "./AnimatedLink";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      uri: "/",
    },
    {
      title: "About",
      uri: "#about",
    },
    {
      title: "Skills",
      uri: "#skills",
    },
    {
      title: "Resume",
      uri: "#resume",
    },
    {
      title: "Works",
      uri: "#works",
    },
    {
      title: "Contact",
      uri: "#contact",
    },
  ];

  return (
    <motion.div
      className="z-50 mx-auto w-3/4 pt-5"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-between rounded-full bg-black/30 shadow-xl shadow-black/30">
        <p className="rounded-full bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 bg-clip-text px-12 py-4 text-4xl font-bold uppercase tracking-widest text-cyan-300 text-transparent">
          Ibnshayed
        </p>
        <div className="flex items-center space-x-5 pr-10 text-xl uppercase text-white">
          {navLinks.map((linkItem) => (
            <AnimatedLink
              key={linkItem.title}
              title={linkItem.title}
              uri={linkItem.uri}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
