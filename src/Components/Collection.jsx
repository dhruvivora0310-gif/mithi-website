import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
    "/Images/look1.png",
    "/Images/look2.jpg",
    "/Images/look3.jpg",
    "/Images/look4.jpg",
    "/Images/look5.jpg",
    "/Images/look6.jpg",
    "/Images/look7.jpg",
    "/Images/look8.jpg",
    "/Images/look9.jpg",
    "/Images/look10.png",
    "/Images/look11.png",
    "/Images/look12.png",
    "/Images/look13.png",
  ];
export default function Collections() {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);

  const [activeImage, setActiveImage] = useState(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -600 : 600,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    setShowLeft(container.scrollLeft > 0);
    setShowRight(
      container.scrollLeft + container.clientWidth <
        container.scrollWidth - 5
    );
  };

  // Smart Preload (loads images before user reaches section)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          images.forEach((src) => {
            const img = new Image();
            img.src = src;
          });
        }
      },
      { rootMargin: "300px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <section
      id="our collection"   // ✅ fixed ID (important)
      ref={sectionRef}
      className="py-24 bg-[#f9f4ef] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Title */}
        <div data-aos="fade-up" className="text-center mb-14">
          <h2
            className="text-5xl md:text-6xl font-bold"
            style={{
              fontFamily: "'Baskervville', serif",
              color: "#1f1f1f",
            }}
          >
            Signature <span className="text-[#B82025]">Collection</span>
          </h2>
          <div className="w-40 h-[3px] mx-auto mt-3 bg-gradient-to-r from-[#F29C38] to-[#B82025] rounded-full"></div>
        </div>

        <div className="relative">

  {/* LEFT ARROW */}
  {showLeft && (
    <button
      onClick={() => scroll("left")}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-30
                 bg-white backdrop-blur-md shadow-xl
                 p-3 rounded-full
                 hover:scale-110 transition"
    >
      <ChevronLeft size={26} />
    </button>
  )}

  {/* RIGHT ARROW */}
  {showRight && (
    <button
      onClick={() => scroll("right")}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-30
                 bg-white backdrop-blur-md shadow-xl
                 p-3 rounded-full
                 hover:scale-110 transition"
    >
      <ChevronRight size={26} />
    </button>
  )}

  {/* SCROLL CONTAINER */}
  <div
    ref={scrollRef}
    onScroll={handleScroll}
    className="flex gap-12 overflow-x-auto scroll-smooth pb-4 px-12 snap-x snap-mandatory no-scrollbar"
  >
    {images.map((image, index) => (
      <div key={index} className="snap-center flex-shrink-0">
        <img
          src={image}
          alt={`Mithi couture design ${index + 1}`}
          onClick={() => setActiveImage(image)}
          className="h-[520px] w-auto rounded-xl shadow-2xl
                     hover:scale-105 transition duration-500 cursor-pointer"
        />
      </div>
    ))}
  </div>

</div>


      </div>

      {/* Fullscreen Modal */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-8 right-8 text-white"
          >
            <X size={32} />
          </button>
          <img
            src={activeImage}
            alt="Full view"
            className="max-h-[90vh] max-w-[90vw] rounded-xl"
          />
        </div>
      )}
    </section>
  );
}
