import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="h-20 flex items-center justify-between">

          <NavLink
            to="/"
            className="text-2xl font-bold"
          >
            Ravi<span className="text-purple-500">.</span>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500 font-medium"
                      : "text-zinc-300 hover:text-white transition"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-6">

            <ul className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-500"
                      : "text-zinc-300"
                  }
                >
                  {link.name}
                </NavLink>
              ))}

            </ul>

          </div>
        )}

      </div>
    </motion.nav>
  );
};

export default Navbar;