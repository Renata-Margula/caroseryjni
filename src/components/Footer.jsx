import { useState } from "react";
import { X, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer({ showCookies, setShowCookies, showPolicy, setShowPolicy }) {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {/* === Footer w flow strony === */}
      <AnimatePresence>
        {isVisible && (
          <motion.footer
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="
  fixed bottom-0 left-0 w-full py-2 px-3
  bg-neutral-900/80 backdrop-blur-md rounded-t-lg z-50
  text-neutral-500 text-[clamp(8px,1.5vw,12px)]
  flex justify-center items-center
"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-[95%] whitespace-nowrap">
              ©2025<span className="font-semibold text-neutral-400">Caroseryjni.pl</span>Wszelkie prawa zastrzeżone.
              <button
                onClick={() => setShowCookies(true)}
                className="underline hover:text-neutral-300 transition-colors ml-2"
              >Polityka cookies
              </button>
              |
              <button
                onClick={() => setShowPrivacy(true)}
                className="underline hover:text-neutral-300 transition-colors ml-2"
              >Polityka prywatności
              </button>
            </div>

            {/* Przycisk zamykający */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              aria-label="Zamknij footer"
            >
              <X size={16} />
            </button>
          </motion.footer>
        )}
      </AnimatePresence>

      {/* Strzałka */}
      <AnimatePresence>
        {!isVisible && (
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setIsVisible(true)}
            className="fixed bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-neutral-900/80 backdrop-blur-md text-white rounded-full z-50 animate-pulse shadow-lg"
            aria-label="Pokaż footer"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
      {/* === Modal: Polityka cookies === */}
      {showCookies && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[60]">
          <div className="bg-neutral-900 border border-neutral-700 text-gray-200 rounded-2xl shadow-xl w-11/12 sm:w-3/4 md:w-1/2 p-6 relative">
            <button
              onClick={() => setShowCookies(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 transition-colors"
            >
              <X size={22} />
            </button>

            <h2 className="text-lg font-semibold mb-4">Polityka cookies</h2>
            <div className="text-gray-300 text-sm leading-relaxed max-h-64 overflow-y-auto space-y-2">
              <p>
                <strong>1. Czym są pliki cookies?</strong> <br />
                Pliki cookies (tzw. „ciasteczka”) to niewielkie pliki tekstowe
                zapisywane na urządzeniu użytkownika podczas korzystania ze strony.
              </p>
              <p>
                <strong>2. Jakie cookies wykorzystuje strona?</strong> <br />
                Strona wykorzystuje niezbędne pliki cookies, które umożliwiają prawidłowe działanie witryny oraz anonimową analizę statystyk odwiedzin (np. przy użyciu narzędzi takich jak Google Analytics).
              </p>
              <p>
                <strong>3. Zarządzanie cookies</strong> <br />
                Użytkownik może w każdej chwili zmienić ustawienia dotyczące cookies w przeglądarce.
              </p>
              <p>
                <strong>4. Kontakt</strong> <br />
                E-mail: kontakt@caroseryjni.pl
              </p>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setShowCookies(false)}
                className="bg-neutral-800 hover:bg-neutral-700 text-gray-100 font-semibold px-4 py-1.5 rounded-lg transition-colors border border-neutral-700"
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === Modal: Polityka prywatności === */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[60]">
          <div className="bg-neutral-900 border border-neutral-700 text-gray-200 rounded-2xl shadow-xl w-11/12 sm:w-3/4 md:w-1/2 p-6 relative">
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 transition-colors"
            >
              <X size={22} />
            </button>
            <h2 className="text-lg font-semibold mb-4">Polityka prywatności</h2>
            <div className="text-gray-300 text-sm leading-relaxed max-h-64 overflow-y-auto space-y-3">
              <p>
                <strong>1. Informacje ogólne</strong> <br />
                Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych zbieranych za pośrednictwem strony internetowej{" "}
                <span className="text-neutral-400">www.caroseryjni.pl</span>, prowadzonej przez Caroseryjni.pl Renata Margula, z siedzibą przy Stróża 61, 27-530 Ożarów, NIP: 8631709321, adres e-mail:{" "}
                <span className="text-neutral-400">kontakt@caroseryjni.pl</span> (dalej: Administrator).
              </p>
              <p>
                <strong>2. Zakres i cel przetwarzania danych</strong> <br />
                Administrator może przetwarzać dane osobowe użytkowników kontaktujących się poprzez e-mail, telefon lub media społecznościowe (Facebook, Instagram). Dane te obejmują np. imię i nazwisko, adres e-mail oraz numer telefonu, jeśli zostaną dobrowolnie podane przez użytkownika. Dane są przetwarzane wyłącznie w celu udzielenia odpowiedzi na zapytanie lub nawiązania kontaktu.
              </p>
              <p>
                <strong>3. Podstawa prawna przetwarzania</strong> <br />
                Podstawą prawną przetwarzania danych osobowych jest: <br />
                - art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes Administratora polegający na prowadzeniu korespondencji z osobami kontaktującymi się ze stroną.
              </p>
              <p>
                <strong>4. Okres przechowywania danych</strong> <br />
                Dane osobowe będą przetwarzane przez okres niezbędny do realizacji kontaktu, a następnie przez czas konieczny do zabezpieczenia ewentualnych roszczeń (nie dłużej niż 12 miesięcy od zakończenia korespondencji).
              </p>
              <p>
                <strong>5. Odbiorcy danych</strong> <br />
                Dane mogą być przekazywane wyłącznie podmiotom zapewniającym obsługę techniczną strony internetowej oraz poczty e-mail, w zakresie niezbędnym do świadczenia tych usług. Administrator nie przekazuje danych osobowych do państw trzecich ani organizacji międzynarodowych.
              </p>
              <p>
                <strong>6. Prawa osoby, której dane dotyczą</strong> <br />
                Każda osoba, której dane dotyczą, ma prawo do: dostępu do swoich danych, sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu, przeniesienia danych oraz wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO). W celu realizacji swoich praw można skontaktować się z Administratorem poprzez e-mail:{" "}
                <span className="text-neutral-400">kontakt@caroseryjni.pl</span>.
              </p>
              <p>
                <strong>7. Pliki cookies</strong> <br />
                Strona www.caroseryjni.pl może wykorzystywać pliki cookies w celu zapewnienia jej prawidłowego działania oraz analizy statystyk odwiedzin (np. przy użyciu narzędzi takich jak Google Analytics). Użytkownik może w każdej chwili zmienić ustawienia plików cookies w swojej przeglądarce.
              </p>
              <p>
                <strong>8. Zmiany w Polityce Prywatności</strong> <br />
                Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. Aktualna wersja dokumentu jest zawsze dostępna na stronie internetowej{" "}
                <span className="text-neutral-400">www.caroseryjni.pl</span>.
              </p>
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={() => setShowPrivacy(false)}
                className="bg-neutral-800 hover:bg-neutral-700 text-gray-100 font-semibold px-4 py-1.5 rounded-lg transition-colors border border-neutral-700"
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
