import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      title: "B.Tech in Computer Science & Engineering",
      institution: "Raghu Engineering College",
      duration: "2023 - 2027",
    },
    {
      title: "Intermediate (MPC)",
      institution: "Pragathi Junior College",
      duration: "2021 - 2023",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 px-5 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {educationData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-purple-500 text-3xl mb-5">
                <FaGraduationCap />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-zinc-400 mb-2">
                {item.institution}
              </p>

              <span className="text-purple-400 text-sm">
                {item.duration}
              </span>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;