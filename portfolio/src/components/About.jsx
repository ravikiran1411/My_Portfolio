import { motion } from "framer-motion";
import { FaCode, FaServer,FaDatabase} from "react-icons/fa";

import { MdOutlineDevices} from "react-icons/md";

const About = () => {
  const highlights = [
    {
      icon: <FaCode size={24} />,
      title: "Full Stack Development",
    },
    {
      icon: <FaServer size={24} />,
      title: "MERN Stack",
    },
    {
      icon: <FaDatabase size={24} />,
      title: "REST APIs",
    },
    {
      icon: <MdOutlineDevices size={24} />,
      title: "Responsive UI",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-5 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-zinc-400 text-lg leading-8">I'm Ravi Kiran Allimilli, a Full Stack Developer and final-year Computer Science student passionate
              about building modern web applications.
            </p>

            <p className="text-zinc-400 text-lg leading-8 mt-6">I enjoy transforming ideas into real-world products using React, Node.js, Express.js and MongoDB. My focus is on creating scalable, responsive and
              user-friendly applications.
            </p>

            <p className="text-zinc-400 text-lg leading-8 mt-6">Currently, I'm focused on strengthening my MERNstack skills, building 
              impactful projects and preparing for software development roles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  hover:border-purple-500
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <div className="text-purple-500 mb-4">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;