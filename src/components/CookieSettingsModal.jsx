import { useState, useEffect } from "react";

export default function CookieSettingsModal({ open, onClose }) {
  const [settings, setSettings] = useState({
    necessary: true, // wymagane — zablokowane
    analytics: false,
    marketing: false,
  });

  // Wczytaj zapisane preferencje
  useEffect(() => {
    const saved = localStorage.getItem("cookieSettings");
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const saveSettings = () => {
    localStorage.setItem("cookieSettings", JSON.stringify(settings));
    localStorage.setItem("cookiesAccepted", "true"); // akceptacja ogólna
    onClose();
  };

  // Blokada zamknięcia gdy modal jest nieaktywny
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[80]">
      <div className="bg-neutral-900 text-gray-200 p-6 rounded-xl max-w-md w-full shadow-xl border border-neutral-800">
        <h2 className="text-xl font-semibold mb-4">
          Ustawienia plików cookies
        </h2>

        {/* Niezbędne */}
        <label className="flex items-center mb-3">
          <input
            type="checkbox"
            checked={settings.necessary}
            disabled
            className="mr-2"
          />
          <span className="opacity-70">
            Niezbędne — wymagane do działania strony
          </span>
        </label>

        {/* Analityczne */}
        <label className="flex items-center mb-3">
          <input
            type="checkbox"
            checked={settings.analytics}
            onChange={() =>
              setSettings({ ...settings, analytics: !settings.analytics })
            }
            className="mr-2"
          />
          <span>Statystyczne / analityczne</span>
        </label>

        {/* Marketingowe */}
        <label className="flex items-center mb-5">
          <input
            type="checkbox"
            checked={settings.marketing}
            onChange={() =>
              setSettings({ ...settings, marketing: !settings.marketing })
            }
            className="mr-2"
          />
          <span>Marketingowe</span>
        </label>

        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg hover:bg-neutral-700 transition-colors"
            onClick={saveSettings}
          >
            Zapisz
          </button>

          <button
            className="px-4 py-2 text-gray-400 underline hover:text-gray-300 transition-colors"
            onClick={onClose}
          >
            Anuluj
          </button>
        </div>
      </div>
    </div>
  );
}
