import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-24 px-5 lg:px-10"
    >
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-10
            text-center
            hover:border-purple-500
            transition-all
            duration-300
          "
        >
          <h2 className="text-4xl font-bold mb-6">
            Resume
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Interested in working together? Download my resume
            to learn more about my projects, technical skills,
            and educational background.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10">
              Full Stack Developer
            </span>

            <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10">
              MERN Stack
            </span>

            <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10">
              EasyBasket
            </span>

            <span className="px-4 py-2 rounded-full bg-black/40 border border-white/10">
              Nivas360
            </span>

          </div>

          <a
            href="/Ravikiran_FullstackResume.pdf"
            download
            className="inline-flex items-center gap-3 mt-10 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-medium transition"
          >
            <FaDownload />
            Download Resume
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default Resume;