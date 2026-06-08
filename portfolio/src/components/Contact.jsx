import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const contacts = [
    {
      title: "Email",
      icon: <MdEmail size={32} />,
      value: "allimilliravikiran@gmail.com",
      link: "mailto:allimilliravikiran@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin size={32} />,
      value: "Connect with me",
      link: "https://www.linkedin.com/in/ravi-kiran-8a9484366?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      title: "GitHub",
      icon: <FaGithub size={32} />,
      value: "View my repositories",
      link: "https://github.com/ravikiran1411",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-5 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-6"
        >
          Let's Connect
        </motion.h2>

        <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-16">
          I'm always open to discussing new opportunities,
          projects, and collaborations.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {contacts.map((item) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-purple-500 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-zinc-400">
                {item.value}
              </p>
            </motion.a>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold mb-3">
            Looking for a Full Stack Developer?
          </h3>

          <p className="text-zinc-400">
            Let's build something amazing together.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;