import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FileText, Palette, Sparkles } from "lucide-react";

const Journey = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const milestones = [
    {
      title: "India in Fashion",
      company: "Reliance",
      description:
        "Contributing to an iconic fashion project that shaped India's fashion landscape.",
      icon: <FileText className="w-6 h-6 text-white" />,
    },
    {
      title: "Assistant Designer",
      company: "Pria Kataria Puri",
      description:
        "Honing design skills and creative vision working closely with established designers.",
      icon: <Palette className="w-6 h-6 text-white" />,
    },
    {
      title: "Assistant Stylist",
      company: "Nykaa Fashion",
      description:
        "Bringing fashion stories to life through styling and creative direction.",
      icon: <Sparkles className="w-6 h-6 text-white" />,
    },
    {
      title: "Assistant Designer",
      company: "Pria Kataria Puri",
      description:
        "Honing design skills and creative vision working closely with established designers.",
      icon: <Palette className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section
      id="journey"
      className="relative bg-[#fdfdfd] py-20 px-10 md:px-12 flex-col items-center"
    >
      {/* Title */}
      <div data-aos="fade-up" className="text-center mb-14">
        <h2
          className="text-5xl md:text-6xl font-bold"
          style={{
            fontFamily: "'Baskervville', serif",
            color: "#1f1f1f",
          }}
        >
          The <span className="text-[#B82025]">Journey</span>
        </h2>
        <div className="w-40 h-[3px] mx-auto mt-3 bg-gradient-to-r from-[#F29C38] to-[#B82025] rounded-full"></div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-7xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F29C38] to-[#B82025] transform -translate-x-1/2"></div>

        {/* Reduced vertical spacing */}
        <div className="space-y-30 md:space-y-30">
          {milestones.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`flex items-center justify-between w-full ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div
                className={`bg-white shadow-md rounded-2xl p-10 md:p-15 w-full md:w-[55%] ${
                  index % 2 === 0 ? "text-right" : "text-left"
                }`}
                style={{
                  fontFamily: "'Baskervville', serif",
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                  minHeight: "200px",
                }}
              >
                <h3
                  className="text-3xl font-bold text-gray-900 mb-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-[#B82025] font-semibold mb-2">
                  {item.company}
                </p>
                <p className="text-gray-600 text-[1.05rem] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Icon Connector */}
              <div className="relative flex justify-center items-center w-20">
                <div
                  className={`absolute w-14 h-14 rounded-full bg-gradient-to-br from-[#F29C38] to-[#B82025] flex items-center justify-center shadow-lg ${
                    index % 2 === 0 ? "translate-x-4" : "-translate-x-4"
                  }`}
                >
                  {item.icon}
                </div>
              </div>

              {/* Empty side for alignment */}
              <div className="hidden md:block w-[60%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
