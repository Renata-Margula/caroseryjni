import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import AccordionItem from "../components/AccordionItem.jsx";

export default function About() {
  const reviews = [
    { id: 1, text: "Outstanding photos and they always take their time for their photo sessions, never in a rush. Very friendly people and I don't know what I like more, their photos or spending time with them :)", author: "Laurențiu P." },
    { id: 2, text: "Jak najbardziej polecam ekipę caroseryjni. Pełna profeska. Sesja zdjęciowa auta wyszła perfekcyjnie i na pewno nie będzie to ostatnia sesja jaką zlecę Renacie i Kubie", author: "Bartłomiej K." },
    { id: 3, text: "Jeśli potrzebujecie profesjonalnej sesji zdjęciowej Waszego auta, to tylko Caroseryjni.pl Jeśli nie potrzebujecie... to tylko Wam się tak wydaje ;-) Umówcie się, a efekty przekroczą oczekiwania!🔥", author: "Krzysztof G." },
    { id: 4, text: "Według mnie topowi fotografowie motoryzacyjni we Wrocławiu, w zeszłym roku obłędnie wspierali swoim talentem wydarzenie Śniadanie & Gablota w stolicy Dolnego Śląska. Bardzo dobrze potrafią uchwycić klimat, świetne detale ale i również perspektywa z poziomu drona. Nie szukają problemu, lecz rozwiązań. To przyjemność móc na nich liczyć. Polecam :)", author: "Śniadanie & Gablota" },
  ];

  const scrollToReviews = () => {
    const reviewsSection = document.getElementById("reviews");
    if (reviewsSection) reviewsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Sekcja O nas */}
      <section id="about" className="max-w-6xl mx-auto px-5 py-20 border-t border-white/5 relative">
        <div className="md:flex gap-8 items-start">
          {/* Lewa kolumna */}
          <div className="md:w-1/2">
            <SectionTitle title="O nas" />

            <p className="mt-4 text-neutral-300 leading-relaxed">
              Jesteśmy parą fotografów, których łączy nie tylko miłość do fotografii,
              ale również fascynacja światem motoryzacji. To połączenie stanowi rdzeń naszej działalności
              i inspiruje nas do tworzenia wyjątkowych obrazów!
            </p>

            <h2 className="mt-8 text-2xl font-bold text-neutral-100">Co nas charakteryzuje?</h2>

            {[
              {
                title: "Unikalność",
                content: "Wiele naszych zdjęć powstało w nietypowych warunkach. Często pokonujemy setki, a nawet tysiące kilometrów, by znaleźć idealne miejsce i światło do uchwycenia wyjątkowego ujęcia.",
              },
              {
                title: "Kompozycja",
                content: "Dbamy o każdy detal naszych zdjęć, od światła, przez tło, aż po sam kadr. Naszym celem jest tworzenie fotografii, które poruszają.",
              },
              {
                title: "Doskonalenie",
                content: "Nieustannie rozwijamy naszą pasję, eksplorując nowe techniki, poznając różnorodne aspekty fotografii i szukając zmiany perspektywy.",
              },
              {
                title: "Wszechstronność",
                content: "Choć główną specjalizacją są usługi fotograficzne związane z motoryzacją, to umiemy również stworzyć niezapomniane portrety oraz uwiecznić piękno innych obiektów.",
              },
            ].map((feature, idx) => (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="mt-6"
              >
                <h3 className="mt-4 text-xl font-semibold text-neutral-100">{feature.title}</h3>
                <p className="mt-2 text-neutral-300 leading-relaxed whitespace-pre-line">{feature.content}</p>
              </motion.section>
            ))}

            {/* Przycisk do opinii */}
            <div className="mt-4">
              <button
                onClick={scrollToReviews}
                className="mb-4 px-6 py-2 rounded-lg
                bg-white/10 text-white font-medium
                shadow-sm hover:shadow-md
                hover:bg-white/20
                transition duration-300
                transform hover:-translate-y-1"
              >
                Sprawdź opinie
              </button>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-neutral-100">Pozostałe usługi</h2>
            </div>

            {/* Accordion */}
            <div className="mt-4 space-y-2">
              <AccordionItem
                title="Krótkie formy video na social media"
                media={{ type: "video", src: "/videos/Caroseryjni_strona.mp4" }}
              />
              <AccordionItem
                title="Tworzymy ujęcia z drona"
                media={{ type: "image", src: "/images/768x432/caroseryjni_dron(1).jpg" }}
              />
              <AccordionItem
                title="Sesje plenerowe (statyczne i w ruchu)"
                media={{ type: "image", src: "/images/1200x800/caroseryjni_mille miglia_2.jpg" }}
              />
              <AccordionItem
                title="I inne"
                content="Masz indywidualny pomysł? Skontaktuj się z nami!" 
              />
            </div>
          </div>

          {/* Prawa kolumna */}
          <div className="md:w-1/2 mt-8 md:mt-0 relative flex flex-col items-center">
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg ring-1 ring-white/5 md:sticky md:top-20">
              <img
                src="/images/1066x800/caroseryjni.jpg"
                alt="about"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja opinii */}
      <motion.section
        id="reviews"
        className="w-full py-20 px-5"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-lg text-neutral-200 mb-8">Opinie naszych klientów</h2>
          <div className="space-y-6">
            <AnimatePresence>
              {reviews.map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 rounded-xl bg-white/10"
                >
                  <blockquote className="text-neutral-300 text-sm italic leading-relaxed">
                    “{review.text}”
                  </blockquote>
                  <div className="mt-2 text-xs text-neutral-400">- {review.author}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
    </>
  );
}
