// src/Components/Hero.jsx
import React from "react";
import heroImg from "../assets/hero-background.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-cover bg-center md:bg-cover md:bg-center 
        bg-no-repeat flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#f9f4ef]/50 via-[#f9f4ef]/50 to-transparent"></div>
      {/* Decorative Animated Sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        <span className="absolute text-2xl animate-twinkle top-1/2 left-[42%]">✨</span>
        <span className="absolute text-2xl animate-twinkle-delay top-[58%] left-[55%]">✨</span>
        <span className="absolute text-4xl animate-twinkle-delay2 top-[46%] left-[70%]">✨</span>
        <span className="absolute text-4xl animate-twinkle top-[40%] left-[30%]">✨</span>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 px-6">
        <p className="text-darkblue uppercase tracking-[3px] text-sm md:text-base font-semibold mb-4">
          Fashion Designer
        </p>
        <h1 className="relative text-10xl md:text-8xl text-black leading-none mb-6 font-semibold"
        style={{
          fontFamily: "'Playfair', serif",
        }}>
          Mithi
        </h1>
        <h2 className="text-3xl md:text-5xl font-serif mb-10">
          <span className="text-[#B82025]">Timeless Elegance,</span>
          <br />
          <span className="text-[#1F1F1F]">Contemporary Grace</span>
        </h2>
        <p className="mt-6 text-darkblue-600 text-lg md:text-xl max-w-2xl mx-auto">
          Where fashion becomes an expression of personality and confidence
        </p>

        <button className="mt-10 bg-[#B82025] hover:bg-[#a61a21] text-white px-10 py-3 rounded-full shadow-md text-lg font-semibold transition-all">
          <a href="#journey">
          Discover the Journey
          </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
