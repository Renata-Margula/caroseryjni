import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";

export default function Contact() {
  const [showPhone, setShowPhone] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 py-20 relative">
      <SectionTitle title="Kontakt" subtitle="Zamów sesję lub zapytaj o szczegóły" />

      <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
        {/* Lewa kolumna */}
        <div>
          <p className="text-neutral-300">
            Chętnie przygotujemy ofertę dopasowaną do Ciebie.<br></br>
            Skontaktuj się z nami tak, jak Ci wygodnie!
          </p>

          <div className="mt-6 space-y-3 text-neutral-300">
            <div>
              ✉️{" "}
              <a
                href="mailto:kontakt@caroseryjni.pl"
                className="underline"
              >
                kontakt@caroseryjni.pl
              </a>
            </div>
            <div>📍 Wrocław / Cała Polska / Dojazd na sesję</div>

            {/* Social + telefon */}
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://facebook.com/caroseryjni"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-md border border-white/6 text-sm hover:bg-white/5 transition"
              >
                Facebook
              </a>

              <a
                href="https://instagram.com/caroseryjni"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-md border border-white/6 text-sm hover:bg-white/5 transition"
              >
                Instagram
              </a>

              {!showPhone ? (
                <button
                  type="button"
                  onClick={() => setShowPhone(true)}
                  className="px-3 py-2 rounded-md border border-white/6 text-sm hover:bg-white/5 transition"
                >
                  Zadzwoń
                </button>
              ) : (
                <AnimatePresence>
                  <motion.a
                    href="tel:+48503363989"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="px-3 py-2 rounded-md border border-white/6 text-sm hover:bg-white/5 transition"
                  >
                    📞 +48 503 363 989
                  </motion.a>
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>

        {/* Prawa kolumna – zdjęcie */}
        <div className="w-full h-full">
          <img
            src="/images/1920x1080/caroseryjni_start.jpg"
            alt="Sesja fotograficzna"
            className="w-full h-full object-cover rounded-xl opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
