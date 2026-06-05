import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { assets } from "../assets/assets";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-5 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Projects I've Built
        </motion.h2>

        {/* EasyBasket */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-10 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 md:p-6 flex items-center">
                    <img
                        src={assets.EasyBasket}
                        alt="EasyBasket"
                        className=" rounded-2xl w-full h-52 sm:h-64 md:h-80 lg:h-96 object-cover"
                    />
                </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">

                <span className="text-purple-500 font-medium mb-3 flex gap-2">
                    <img src={assets.star_icon} className="" /> <span>Featured Project</span>
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">EasyBasket</h3>
                
                <p className="text-zinc-400 leading-7 text-sm md:text-base">
                    Hyperlocal Multi-Vendor Grocery Marketplace that
                    connects customers with nearby stores and provides
                    a seamless shopping experience.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                    {[
                        "React",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "Stripe",
                    ].map((tech) => (
                    <span
                        key={tech}
                        className=" px-4 py-2 rounded-full bg-black border border-white/10 text-sm"
                    >
                        {tech}
                    </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">

                    <div className="bg-black/40 rounded-xl p-2 text-sm flex items-center justify-center text-center">
                        <img src={assets.map_icon} className="w-4 h-4" /> <span className="pl-1">Nearby Store Discovery</span>
                    </div>

                    <div className="bg-black/40 rounded-xl p-4 text-sm flex items-center justify-center text-center">
                        <img src={assets.cart_iconn} className="w-8 h-8" /> <span> Multi Vendor Marketplace </span>
                    </div>

                    <div className="bg-black/40 rounded-xl p-4 text-sm flex items-center justify-center text-center">
                        Secure Payments
                    </div>

                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                        href="https://easybasket.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className=" flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl transition"
                    >
                        <FiExternalLink />
                        Live Demo
                    </a>

                    <a
                        href="https://github.com/ravikiran1411/easybasket"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 border border-white/10 hover:border-purple-500 px-5 py-3 rounded-xl transition"
                    >
                        <FaGithub />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
        </motion.div>

        
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 md:p-6 flex items-center">
                    <img
                    src={assets.nivas360}
                    alt="Nivas360"
                    className="rounded-2xl w-full h-auto object-cover"
                    />
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Nivas360</h3>
                    <p className="text-zinc-400 leading-7 text-sm md:text-base">
                        Nivas360 is a full-stack real estate web application built
                        using the MERN stack (MongoDB, Express, React, Node.js).
                        It allows users to explore properties, owners to list and
                        manage properties, and provides modern real estate features
                        like property search, wishlist, chat system, and property
                        management.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mt-6">
                        {[
                            "React",
                            "Node.js",
                            "Express.js",
                            "MongoDB",
                            "Tailwind CSS",
                        ].map((tech) => (
                            <span 
                            key={tech}
                            className=" px-4 py-2 rounded-full bg-black border border-white/10 text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <a
                        href="https://nivas360-frontend.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className=" flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl transition"
                        >
                            <FiExternalLink />
                            Live Demo
                        </a>
                        
                        <a
                        href="https://github.com/ravikiran1411/nivas360"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 border border-white/10 hover:border-purple-500 px-5 py-3 rounded-xl transition"
                        >
                            <FaGithub />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;