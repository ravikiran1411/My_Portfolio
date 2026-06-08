import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { assets } from "../assets/assets.js";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center mt-22 sm:mt-0 px-5 lg:px-10 overflow-hidden">
      <div className="absolute top-32 left-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-purple-500 font-medium mb-4">
           Aspiring Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm Ravi Kiran
            <br />
            Allimilli 
          </h1>

          <p className="mt-6 text-zinc-400 text-lg max-w-xl">
            I build modern and scalable web applications
            using React, Node.js, Express.js and MongoDB.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-medium transition"
            >
              View Projects
            </a>

            <a
              href="#resume"
              className="border border-white/10 hover:border-purple-500 px-6 py-3 rounded-xl font-medium transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <div className="relative flex justify-center">

          <motion.img
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            src={assets.avatar}
            alt="avatar"
            className="w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-purple-500 relative z-10"
          />

          <div className="hidden sm:flex absolute top-8 left-0 bg-[#111] px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
            <FaReact className="text-cyan-400" />
            React
          </div>

          <div className="hidden sm:flex absolute top-24 right-0 bg-[#111] px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
            <FaNodeJs className="text-green-500" />
            Node.js
          </div>

          <div className="hidden sm:flex absolute bottom-20 left-0 bg-[#111] px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
            <SiMongodb className="text-green-400" />
            MongoDB
          </div>

          <div className="hidden sm:flex absolute bottom-0 right-0 bg-[#111] px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
            <FaJsSquare className="text-yellow-400" />
            JavaScript
          </div>

          <div className="hidden sm:flex absolute bottom-20 right-6 bg-[#111] px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
            <SiTailwindcss className="text-sky-400" />
            Tailwind
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;