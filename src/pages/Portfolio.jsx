import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "../components/SectionTitle.jsx";
import GalleryCard from "../components/GalleryCard.jsx";

function Lightbox({ images, index, onClose }) {
  const [current, setCurrent] = useState(index);
  const [direction, setDirection] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => setCurrent(index), [index]);
  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 300);
    return () => clearTimeout(timer);
  }, [current]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleNext, handlePrev, onClose]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  const { fbLink } = images[current];

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="max-w-[1200px] w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-md ring-1 ring-white/10 z-20 text-white hover:bg-white/10 transition"
          aria-label="Zamknij"
        >
          ✕
        </button>

        <button
          onClick={handlePrev}
          className="group absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-md ring-1 ring-white/10 z-20 text-white hover:bg-white/10 transition"
          aria-label="Poprzednie zdjęcie"
        >
          <ChevronLeft
            size={28}
            strokeWidth={2.5}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
        </button>

        <button
          onClick={handleNext}
          className="group absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md ring-1 ring-white/10 z-20 text-white hover:bg-white/10 transition"
          aria-label="Następne zdjęcie"
        >
          <ChevronRight
            size={28}
            strokeWidth={2.5}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </button>

        {/* obsługa swipe przy pomocy drag="x" */}
        <div
          id="lightbox-swipe-zone"
          className="w-full h-[80vh] sm:aspect-[16/9] overflow-hidden rounded-md relative"
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.img
              key={current}
              src={images[current].src}
              alt={`Zdjęcie ${current + 1}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full object-contain absolute top-0 left-0"
              loading="lazy"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, info) => {
                if (info.offset.x > 100) handlePrev();
                else if (info.offset.x < -100) handleNext();
              }}
            />
          </AnimatePresence>

          {showButton && (
            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2 z-20">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-12 h-8 rounded overflow-hidden border-2 ${
                    i === current ? "border-white" : "border-transparent"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={`thumb-${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {showButton && fbLink && (
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <a
                href={fbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold hover:bg-white/30 transition"
              >
                Zobacz album na Facebooku
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const images = [
    {
      src: "/images/1200x800/caroseryjni_sec.jpg",
      fbLink:
        "https://www.facebook.com/share/p/1H2BLXtf2C/",
      caption: "Mercedes-Benz SEC",
    },
    {
      src: "/images/1200x800/caroseryjni_ar_gtv.jpg",
      fbLink:
        "https://www.facebook.com/share/p/1JuR7JqcN1/",
      caption: "Alfa Romeo GTV",
    },
    {
      src: "/images/1200x800/caroseryjni_villa d_este.jpg",
      fbLink:
        "https://www.facebook.com/share/p/1BgBLZT1xr/",
      caption: "Villa d’Este",
    },
    {
      src: "/images/1200x800/caroseryjni_356.jpg",
      fbLink:
        "https://www.facebook.com/share/p/19wbUFaCtE/",
      caption: "Porsche 356",
    },
    {
      src: "/images/1200x800/caroseryjni_montreal.jpg",
      fbLink:
        "https://www.facebook.com/share/p/1QTu2J7aq1/",
      caption: "Alfa Romeo Montreal",
    },
    {
      src: "/images/1200x800/caroseryjni_mille miglia.jpg",
      fbLink:
        "https://www.facebook.com/share/p/14LtzFE5U2u/",
      caption: "Mille Miglia",
    },
    {
      src: "/images/1200x800/caroseryjni_theice.jpg",
      fbLink:
        "https://www.facebook.com/share/p/17WXAfKkFw/",
      caption: "The ICE – St. Moritz",
    },
    {
      src: "/images/1200x800/caroseryjni_street dreams.jpg",
      fbLink:
        "https://www.facebook.com/share/p/188vG1MioH/",
      caption: "Street Dreams",
    },
    {
      src: "/images/1200x800/caroseryjni_w108.jpg",
      fbLink:
        "https://www.facebook.com/share/p/1DuWqTug1v/",
      caption: "Mercedes-Benz W108",
    },
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-5 py-20">
      <SectionTitle
        title="Portfolio"
        subtitle="Klasyczne samochody. Wybrane sesje."
      />
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, i) => (
          <GalleryCard
            key={i}
            image={image}
            i={i}
            onOpen={() => setLightboxIndex(i)}
          />
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
