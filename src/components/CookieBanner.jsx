import { useState, useEffect } from "react";

export default function CookieBanner({ setShowCookies }) {
  // ✅ Początkowy stan zależny od localStorage
  const [visible, setVisible] = useState(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    return !accepted; // jeśli brak zgody → pokaż baner
  });

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  // Opcjonalnie: cofnięcie zgody / otwarcie panelu zarządzania
  const manageCookies = () => {
    setShowCookies && setShowCookies(true);
    setVisible(false); // można ukryć baner, modal będzie widoczny
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-neutral-900 text-gray-200 text-sm md:text-base text-center p-3 md:p-4 z-[60] shadow-lg border-t border-neutral-800">
      <p className="inline">
        Ta strona wykorzystuje pliki cookies niezbędne do jej prawidłowego działania.
        {" "}
        <button
          onClick={manageCookies}
          className="text-gray-400 underline hover:text-gray-300 transition-colors"
        >
          Ustawienia plików cookies
        </button>.
      </p>
      <button
        onClick={acceptCookies}
        className="ml-3 bg-neutral-800 hover:bg-neutral-700 text-gray-100 font-semibold px-4 py-1.5 rounded-lg transition-colors border border-neutral-700"
      >
        Akceptuję
      </button>
    </div>
  );
}
