import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  ];

  return (
    <section id="skills" className="py-24 overflow-hidden">

      <style>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;

          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );

          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        .marquee-track {
            display: flex;
            gap: 1.5rem;
            width: max-content;
            animation: marquee 45s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .skill-card {
          width: 160px;
          height: 160px;

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          gap: 0.9rem;

          border-radius: 24px;

          background: rgba(255,255,255,0.05);

          border: 1px solid rgba(255,255,255,0.1);

          backdrop-filter: blur(10px);

          flex-shrink: 0;

          transition: all 0.3s ease;
        }

        .skill-card:hover {
          border-color: rgba(168,85,247,0.8);

          background: rgba(168,85,247,0.1);

          transform: translateY(-8px);

          box-shadow: 0 0 30px rgba(168,85,247,0.25);
        }

        .skill-icon {
          font-size: 4rem;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-name {
          color: #e2e8f0;
          font-weight: 600;
          font-size: 1rem;
          text-align: center;
        }

        @media (max-width: 640px) {
          .skill-card {
            width: 130px;
            height: 130px;
          }

          .skill-icon {
            font-size: 3rem;
          }

          .skill-name {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 mb-12">
        <h2 className="text-4xl font-bold text-center mb-4">
          Skills & Technologies
        </h2>

        <p className="text-zinc-400 text-center">
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">

          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="skill-card"
            >
              <span
                className="skill-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </span>

              <span className="skill-name">
                {skill.name}
              </span>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Skills;