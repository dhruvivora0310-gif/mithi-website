import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 text-center  flex-col items-center justify-center"
      style={{
        backgroundColor: "#f7eee7", // soft beige color
      }}
    >
      {/* Title */}
      <div data-aos="fade-up" className="mb-10">
        <h2
          className="text-5xl md:text-5xl font-bold"
          style={{
            fontFamily: "'Baskervville', serif",
            color: "#1f1f1f",
          }}
        >
          Let&apos;s <span className="text-black">Connect</span>
        </h2>
        <div className="w-28 h-[3px] mx-auto mt-3 bg-gradient-to-r from-[#B82025] to-[#F29C38] rounded-full"></div>
      </div>

      {/* Subtext */}
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl mb-4"
        style={{
          fontFamily: "'Baskervville', serif",
        }}
      >
        Interested in learning more about Mithi or discussing a collaboration?
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-lg md:text-xl font-semibold mb-8"
        style={{
          fontFamily: "'Baskervville', serif",
          color: "#1f1f1f",
        }}
      >
        I&apos;d love to hear from you.
      </p>

      {/* Button */}
<div data-aos="zoom-in" className="mb-10">
  <button
    onClick={() => {
      const email = "info@mithibyjansivora.com";
      const subject = "Inquiry from Website";
      const body = "Hi Mithi,\n\nI would like to get in touch regarding...";
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Detect if the user is on mobile
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile) {
        // Open native email app on phones
        window.location.href = mailtoLink;
      } else {
        // Open Gmail compose in the same tab on desktop
        window.location.href = gmailLink;
      }
    }}
    className="inline-flex items-center gap-3 bg-[#B82025] hover:bg-[#a61a21] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 text-lg"
    style={{
      fontFamily: "'Poppins', sans-serif",
    }}
  >
    <Mail className="w-7 h-5" />
    Get in Touch
  </button>
</div>



      {/* Social Icons */}
      <div data-aos="fade-up" data-aos-delay="300" className="flex gap-6 justify-center">
        <a
          href="https://www.instagram.com/mithibyjansivora?igsh=MWtydWE5M2hmdjVhYQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <Instagram className="w-6 h-6 text-gray-700" />
        </a>
        <a
          href="https://www.linkedin.com/in/jansi-vora-4aa33a322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <Linkedin className="w-6 h-6 text-gray-700" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
