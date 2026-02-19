import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Instagram, Linkedin, Phone, MapPin, X } from "lucide-react";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 text-center"
      style={{ backgroundColor: "#f7eee7" }}
    >
      {/* Title */}
      <div data-aos="fade-up" className="mb-10">
        <h2
          className="text-5xl font-bold"
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
        className="text-gray-600 max-w-2xl mx-auto text-lg mb-4"
        style={{ fontFamily: "'Baskervville', serif" }}
      >
        Interested in learning more about Mithi or discussing a collaboration?
      </p>

      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-lg font-semibold mb-8"
        style={{ fontFamily: "'Baskervville', serif" }}
      >
        I&apos;d love to hear from you.
      </p>

      {/* Get in Touch Button */}
      <div data-aos="zoom-in" className="mb-10">
        <button
          onClick={() => setShowPopup(true)}
          className="inline-flex items-center gap-3 bg-[#B82025] hover:bg-[#a61a21] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 text-lg"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <Mail className="w-6 h-5" />
          Get in Touch
        </button>
      </div>

      {/* Social Icons */}
      <div data-aos="fade-up" data-aos-delay="300" className="flex gap-6 justify-center">
        <a
          href="https://www.instagram.com/mithibyjansivora"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition"
        >
          <Instagram className="w-6 h-6 text-gray-700" />
        </a>

        <a
          href="https://www.linkedin.com/in/jansi-vora-4aa33a322"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition"
        >
          <Linkedin className="w-6 h-6 text-gray-700" />
        </a>
      </div>

      {/* POPUP MODAL */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-10 w-[90%] max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={24} />
            </button>

            <h3
              className="text-3xl font-bold mb-8 text-center"
              style={{ fontFamily: "'Baskervville', serif" }}
            >
              Contact Details
            </h3>

            <div className="space-y-6 text-lg">

              {/* Phone */}
              <a
                href="tel:+919082024155"
                className="flex items-center gap-4 hover:text-[#B82025] transition"
              >
                <Phone className="w-5 h-5" />
                +91 90820 24155
              </a>

              {/* Email */}
              <button
  onClick={() => {
    const email = "info@mithibyjansivora.com";
    const subject = "Inquiry from Website";
    const body =
      "Hi Mithi,\n\nI would like to get in touch regarding...";

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.open(mailtoLink, "_self");
    } else {
      window.open(gmailLink, "_blank", "noopener,noreferrer");

    }
  }}
  className="flex items-center gap-4 hover:text-[#B82025] transition"
>
  <Mail className="w-5 h-5" />
  info@mithibyjansivora.com
</button>


              {/* Location */}
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5" />
                Mumbai, India
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
