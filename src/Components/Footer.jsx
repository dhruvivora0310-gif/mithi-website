import React from "react";
import logo from "../assets/mithi-logo.png";

const Footer = () => {
  return (
    <footer
      className="text-center py-10"
      style={{
        fontFamily: "'Baskervville', serif",
      }}
    >
      {/* Logo */}
      <div className="mb-4">
        <img
          src={logo}
          alt="Mithi Logo"
          className="mx-auto h-40 w-auto object-contain"
        />
      </div>

      {/* Copyright */}
      <p className="text-gray-700 text-base">
        © {new Date().getFullYear()}{" "}
          Mithi by Jansi Vora.
        . All rights reserved.
      </p>

      {/* Tagline */}
      <p className="text-gray-600 mt-2 text-sm tracking-wide">
        Timeless Elegance, Contemporary Grace
      </p>
    </footer>
  );
};

export default Footer;
