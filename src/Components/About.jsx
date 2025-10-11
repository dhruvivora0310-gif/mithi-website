import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#fdfdfd] py-20 px-6 md:px-12"
    >
      <div className="w-full max-w-5xl text-center">
        {/* Heading */}
        <div data-aos="fade-up" className="mb-10">
          <h2
            className="text-5xl md:text-6xl font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1f1f1f",
            }}
          >
            About Me{" "}
            <span
              className="text-[#B82025]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
              }}
            >
              <span className="text-7xl">&amp;</span> Mithi
            </span>
          </h2>
          <div className="w-28 h-[3px] mx-auto mt-3 bg-gradient-to-r from-[#B82025] to-[#F29C38] rounded-full"></div>
        </div>

        {/* Content Box */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12 text-black-800 leading-relaxed max-w-4xl text-left"
          style={{
            fontFamily: "'Baskervville', serif",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          <p className="text-gray-800 mb-6" style={{
            fontSize: "1.4rem",
            lineHeight: "1.9",
            color: "black",
            fontWeight:"bold",
            }}>
            I&apos;m{" "} <span className=" text-[#B82025]">Jansi Vora</span>, the founder of{" "}
            <span className="text-[#B82025]">Mithi</span> – a brand born from
            my passion for fashion, creativity, and storytelling through design.
            </p>

          <p className="text-600 mb-6"
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.9",
            }}>
            My journey in the fashion industry has given me the privilege of
            working with some of the most respected names in the field. I began
            my career contributing to Reliance&apos;s iconic project{" "}
            <span className="font-semibold">India in Fashion</span>,
            followed by working closely as an Assistant Designer with{" "}
            <span className="font-semibold">Pria Kataria Puri</span>, and later
            as an Assistant Stylist at{" "}
            <span className="font-semibold">Nykaa Fashion</span>.
          </p>

          <p className="text-black-600 mb-6"
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.9",
            }}>
            Each of these experiences shaped my vision and strengthened my
            commitment to creating timeless yet contemporary pieces under the
            label{" "}
            <span className="font-semibold text-[#B82025]">
              Mithi
            </span>
            .
          </p>

          <p className="text-black-1000"
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.9",
            }}>
            At{" "}
            <span className="font-semibold text-[#B82025]">Mithi</span>,
            my goal is to blend elegance with individuality, offering designs
            that are not just garments but expressions of personality and
            confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
