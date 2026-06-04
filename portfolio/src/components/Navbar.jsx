import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Education",
    "Resume",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div className="h-20 flex items-center justify-between">

          <a
            href="#home"
            className="text-2xl font-bold tracking-wide"
          >
            Ravi<span className="text-purple-500">.</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">

            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="
                    text-zinc-300
                    hover:text-white
                    transition
                    duration-300
                  "
                >
                  {link}
                </a>
              </li>
            ))}

          </ul>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-3xl"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>

        </div>

        {open && (
          <div className="lg:hidden pb-6">

            <ul className="flex flex-col gap-4">

              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-zinc-300"
                >
                  {link}
                </a>
              ))}

            </ul>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;