import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/mithi-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div className="flex-shrink-0 transition-all duration-300">
          <img
            src={logo}
            alt="Mithi Logo"
            className={`object-contain transition-all duration-300 ${
              scrolled ? "h-20 w-auto" : "h-23 w-auto"
            }`}
          />
        </div>

        {/* Desktop Nav Links */}
        <ul
          className={`hidden md:flex items-center gap-10 text-lg font-medium ${
            scrolled ? "text-gray-700" : "text-black"
          }`}
        >
          {["Home", "About", "Journey", "Contact"].map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="relative px-3 py-1 transition-all duration-300 group-hover:text-[#B82025]"
              >
                {/* Hover beige background */}
                <span className="absolute inset-0 rounded-full bg-[#f6e8db] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

                {/* Text */}
                <span className="relative z-10">{item}</span>
              </a>
            </li>
          ))}

          {/* Get in Touch Button */}
          <li>
            <a
              href="#contact"
              className="ml-2 bg-[#B82025] hover:bg-[#a61a21] text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300"
            >
              Get in Touch
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden bg-white shadow-lg absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium text-gray-800">
          {["Home", "About", "Journey", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block relative px-3 py-1 transition-all duration-300 hover:text-[#B82025]"
                onClick={() => setMenuOpen(false)}
              >
                {/* Beige hover background */}
                <span className="absolute inset-0 rounded-full bg-[#f6e8db] opacity-0 hover:opacity-100 transition-all duration-300"></span>
                <span className="relative z-10">{item}</span>
                {/* Gradient underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[3px] rounded-full bg-gradient-to-r from-[#B82025] to-[#F29C38] transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contact"
              className="bg-[#B82025] hover:bg-[#a61a21] text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
