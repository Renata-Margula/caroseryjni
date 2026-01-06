import { useState, useRef } from "react";
import ScrollImage from "../components/ScrollImage.jsx";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "../components/Lightbox.jsx";
import AnimatedLightEffect from "../components/AnimatedLightEffect.jsx";
import CalendarModal from "../components/CalendarModal.jsx";

export default function Home() {
  const backgroundRef = useRef(null);
  const galleryRef = useRef(null);

  const galleryImages = [
    { src: "/images/1200x800/caroseryjni_venturi.jpg", caption: "Dynamiczne zdjęcia motoryzacyjne" },
    { src: "/images/1200x800/caroseryjni_motoclassic.jpg", caption: "Pełne relacje z wydarzeń i rajdów" },
    { src: "/images/1200x800/caroseryjni_bentley_sprzedazowe.jpg", caption: "Zdjęcia sprzedażowe" },
    { src: "/images/1066x800/caroseryjni_sesja.jpg", caption: "Sesje i zdjęcia produktowe" },
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // KALENDARZ — nowy stan
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <main className="relative font-sans overflow-hidden text-neutral-100">
      {/* Tło */}
      <div
        ref={backgroundRef}
        className="fixed top-0 left-0 w-full h-screen bg-black z-0"
        style={{
          backgroundImage: "url('/images/1200x800/strona_mobile.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <div className="fixed inset-0 bg-black/60 z-[1] pointer-events-none"></div>
      <section className="relative w-full h-screen px-5 flex flex-col justify-start items-center text-center pt-20 z-10 bg-transparent">
        <AnimatedLightEffect />
        <motion.div
          className="relative max-w-3xl px-6"
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 1.0 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight 
      drop-shadow-[0_0px_30px_rgba(255,255,255,0.45)]
      text-white">
            Caroseryjni
          </h1>

          <h2 className="mt-3 text-xl sm:text-2xl text-neutral-200 uppercase tracking-[0.25em] font-light
      drop-shadow-[0_0px_10px_rgba(0,0,0,0.9)] whitespace-nowrap">
            Film | Fotografia | Dron
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-neutral-200 text-lg sm:text-xl leading-relaxed
      drop-shadow-[0_0px_7px_rgba(0,0,0,1)]">
            Robimy to, co kochamy. Po prostu.
          </p>

          {/* Przycisk */}
          <button
            onClick={() => setCalendarOpen(true)}
            className="
      mt-8 flex items-center gap-2 mx-auto
      px-6 py-3 rounded-xl border border-white/30
      bg-white/10 backdrop-blur-md
      hover:bg-white/20 hover:border-white/50
      transition-all duration-300
      shadow-[0_0_20px_rgba(255,255,255,0.25)]
      "
          >
            {/* Ikonka kalendarza */}
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>

            <span className="text-white text-lg">Kalendarz wydarzeń</span>
          </button>
        </motion.div>

        {/* Scroll-down button */}
        <motion.button
          onClick={scrollToGallery}
          className="absolute bottom-[30vh] sm:bottom-[25vh] flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 
  border-2 border-white rounded-full z-50 bg-neutral-900/80 backdrop-blur-lg
  shadow-[0_0_15px_#fff] animate-pulse cursor-pointer"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          aria-label="Przewiń do galerii"
        >
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="6 13 12 19 18 13" />
          </svg>
        </motion.button>
      </section>

      <motion.section
        ref={galleryRef}
        className="max-w-6xl mx-auto px-5 py-12 relative z-10 bg-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      >
        {galleryImages.map((item, index) => (
          <ScrollImage
            key={index}
            src={item.src}
            alt={`Portfolio ${index + 1}`}
            index={index}
            caption={item.caption}
            onClick={() => setLightboxIndex(index)}
          />
        ))}
      </motion.section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={galleryImages}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>

      {/* MODAL KALENDARZA */}
      <CalendarModal isOpen={calendarOpen} onClose={() => setCalendarOpen(false)} />
    </main>
  );
}
