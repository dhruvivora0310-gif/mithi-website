import React, { useEffect, useState } from "react";
import logo from "../assets/mithi-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 md:px-12 transition-all duration-500">
        {/* Logo */}
        <div className="flex-shrink-0 transition-all duration-500">
          <img
            src={logo}
            alt="Mithi Logo"
            className={`object-contain transition-all duration-500 ${
              scrolled ? "h-14 md:h-15" : "h-30 md:h-30"
            }`}
          />
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex items-center gap-10 text-lg font-medium transition-all duration-500 ${
            scrolled ? "text-gray-700" : "text-black"
          }`}
        >
          {["Home", "About", "Journey", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="nav-link relative transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}

          {/* Get in Touch Button */}
          <li>
            <a
              href="#contact"
              className="ml-2 bg-[#B82025] hover:bg-[#a61a21] text-white px-8 py-2 rounded-full font-semibold shadow-md transition-all duration-300"
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
