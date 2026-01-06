import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EVENTS = {
  "2026-02-21": [
    { title: "KUSTOMHEAD 2026", link: "https://facebook.com/events/s/kustomhead-2026-wystawa-zabytk/612633631500616/" },
  ],
  "2026-02-22": [
    { title: "KUSTOMHEAD 2026", link: "https://facebook.com/events/s/kustomhead-2026-wystawa-zabytk/612633631500616/" },
  ],
  "2026-03-08": [
    { title: "Kobieta za kółkiem VII", link: "https://facebook.com/events/s/kobieta-za-ko%C5%82kiem-vii-edycja/847104654407052/" },
  ],
  "2026-03-14": [
    { title: "XIV Targi Motocyklowe Wrocław Motorcycle Show 2026 – dzień 1", link: "https://facebook.com/events/s/xiv-targi-motocyklowe-wroc%C5%82aw-/2461003907589563/" },
  ],
  "2026-03-15": [
    { title: "XIV Targi Motocyklowe Wrocław Motorcycle Show 2026 – dzień 2", link: "https://facebook.com/events/s/xiv-targi-motocyklowe-wroc%C5%82aw-/2461003907589563/" },
  ],
  "2026-03-29": [
    { title: "Początek Sezonu C. S. Klasyków 2026", link: "https://facebook.com/events/s/poczatek-sezonu-cs-klasykow-20/1138154187974698/" },
  ],
  "2026-04-11": [
    { title: "I runda Via Classic Cup", link: "https://www.facebook.com/ViaPrestigeEurope/" },
    { title: "II Meeting Modelarski Pojazdów Cywilnych + Zlot Klasyków", link: "https://facebook.com/events/s/ii-meeting-modelarski-pojazdow/1464702117913664/" },
  ],
  "2026-04-18": [
    { title: "Zlot klasycznej motoryzacji - start sezonu", link: "https://www.facebook.com/events/1725509802183080/" },
    { title: "Motor Vintage Bazar - edycja letnia", link: "https://facebook.com/events/s/motor-vintage-bazar-edycja-let/798296532590367/" },
  ],
  "2026-04-23": [
    { title: "Poznań Motor Show – dzień 1", link: "https://www.facebook.com/PoznanMotorShow/" },
  ],
  "2026-04-24": [
    { title: "Poznań Motor Show – dzień 2", link: "https://www.facebook.com/PoznanMotorShow/" },
  ],
  "2026-04-25": [
    { title: "Poznań Motor Show – dzień 3", link: "https://www.facebook.com/PoznanMotorShow/" },
    { title: "VII Zlot Klasyków Rozruch", link: "https://www.facebook.com/events/1113615016565120/" },
  ],
  "2026-04-26": [
    { title: "Poznań Motor Show – dzień 4", link: "https://www.facebook.com/PoznanMotorShow/" },
  ],
  "2026-05-01": [
    { title: "RETRO RAJD 2", link: "https://facebook.com/events/s/retro-rajd-2/1261082769376854/" },
  ],
  "2026-05-02": [
    { title: "VI RAJD POLONEZA – dzień 1", link: "https://facebook.com/events/s/vi-rajd-poloneza-2-3-maja-2026/1621288888545760/" },
  ],
  "2026-05-03": [
    { title: "Zalewiada Retro Zlot 2026", link: "https://facebook.com/events/s/zalewiada-retro-zlot-2026/843843574869581/" },
    { title: "VI RAJD POLONEZA – dzień 2", link: "https://facebook.com/events/s/vi-rajd-poloneza-2-3-maja-2026/1621288888545760/" },
  ],
  "2026-05-15": [
    { title: "Concorso d'Eleganza Villa d'Este – dzień 1", link: "https://concorsodeleganzavilladeste.com/blocks/home" },
    { title: "FuoriConcorso – dzień 1", link: "https://www.fuoriconcorso.org/" },
    { title: "XVI ZLOT AUT AMERYKAŃSKICH I ZABYTKOWYCH", link: "https://facebook.com/events/s/xvi-zlot-aut-amerykanskich-i-z/1532515697900973/" },
  ],
  "2026-05-16": [
    { title: "II runda Via Classic Cup", link: "https://www.facebook.com/ViaPrestigeEurope/" },
    { title: "Concorso d'Eleganza Villa d'Este – dzień 2", link: "https://concorsodeleganzavilladeste.com/blocks/home" },
    { title: "FuoriConcorso – dzień 2", link: "https://www.fuoriconcorso.org/" },
  ],
  "2026-05-17": [
    { title: "Concorso d'Eleganza Villa d'Este – dzień 3", link: "https://concorsodeleganzavilladeste.com/blocks/home" },
  ],
  "2026-05-19": [
    { title: "Autotechnika Expo 2026 – dzień 1", link: "https://facebook.com/events/s/autotechnika-expo-2026/1252814263064224/" },
  ],
  "2026-05-20": [
    { title: "Autotechnika Expo 2026 – dzień 2", link: "https://facebook.com/events/s/autotechnika-expo-2026/1252814263064224/" },
  ],
  "2026-05-21": [
    { title: "Autotechnika Expo 2026 – dzień 3", link: "https://facebook.com/events/s/autotechnika-expo-2026/1252814263064224/" },
  ],
  "2026-05-23": [
    { title: "Drift Girl Camp 2k26 – dzień 1", link: "https://facebook.com/events/s/drift-girl-camp-/1748992352722540/" },
  ],
  "2026-05-24": [
    { title: "Drift Girl Camp 2k26 – dzień 2", link: "https://facebook.com/events/s/drift-girl-camp-/1748992352722540/" },
  ],
  "2026-05-28": [
    { title: "International Mini Meeting – dzień 1", link: "https://imm2026.pl/" },
  ],
  "2026-05-29": [
    { title: "International Mini Meeting – dzień 2", link: "https://imm2026.pl/" },
  ],
  "2026-05-30": [
    { title: "International Mini Meeting – dzień 3", link: "https://imm2026.pl/" },
    { title: "Klasyki w Uwielinach po raz 5", link: "https://facebook.com/events/s/klasyki-w-uwielinach-po-raz-5/1287915842646076/" },
  ],
  "2026-05-31": [
    { title: "International Mini Meeting – dzień 4", link: "https://imm2026.pl/" },
    { title: "Klasyki Budzą Kielce", link: "https://facebook.com/events/s/klasyki-budza-kielce-budzenie-/784503054385197/" },
  ],
  "2026-06-01": [
    { title: "International Mini Meeting – dzień 5", link: "https://imm2026.pl/" },
  ],
  "2026-06-10": [
    { title: "VIA PRESTIGE – dzień 1", link: "https://www.facebook.com/ViaPrestigeEurope/" },
  ],
  "2026-06-11": [
    { title: "VIA PRESTIGE – dzień 2", link: "https://www.facebook.com/ViaPrestigeEurope/" },
    { title: "Classica Mierzęcin – dzień 1", link: "https://www.facebook.com/share/1BgXCrttuc/" },
  ],
  "2026-06-12": [
    { title: "VIA PRESTIGE – dzień 3", link: "https://www.facebook.com/ViaPrestigeEurope/" },
    { title: "Classica Mierzęcin – dzień 2", link: "https://www.facebook.com/share/1BgXCrttuc/" },
    { title: "ZLOT DODGE RAM POLAND 6 edycja", link: "https://facebook.com/events/s/zlot-dodge-ram-poland-edycja-6/1216861129652928/" },
  ],
  "2026-06-13": [
    { title: "VIA PRESTIGE – dzień 4", link: "https://www.facebook.com/ViaPrestigeEurope/" },
    { title: "Classica Mierzęcin – dzień 3", link: "https://www.facebook.com/share/1BgXCrttuc/" },
  ],
  "2026-06-14": [
    { title: "Classica Mierzęcin – dzień 4", link: "https://www.facebook.com/share/1BgXCrttuc/" },
    { title: "II zlot Klasyczne Pojazdy w Pałacowych Ogrodach", link: "https://www.facebook.com/events/2289834444762772/" },
    { title: "13 Zlot pojazdów zabytkowych i klasycznych w Mszczonowie - 'Trzynastka to nie pech'", link: "https://facebook.com/events/s/13-zlot-pojazdow-zabytkowych-i/791980083796335/" },
  ],
  "2026-06-16": [
    { title: "FIVA World Motorcycle Rally 2026 – dzień 1", link: "https://fiva-wmr-2026.akhv.cz/" },
  ],
  "2026-06-17": [
    { title: "FIVA World Motorcycle Rally 2026 – dzień 2", link: "https://fiva-wmr-2026.akhv.cz/" },
  ],
  "2026-06-18": [
    { title: "FIVA World Motorcycle Rally 2026 – dzień 3", link: "https://fiva-wmr-2026.akhv.cz/" },
  ],
  "2026-06-19": [
    { title: "Moto Summer 8 - FESTIVAL – dzień 1", link: "https://facebook.com/events/s/moto-summer-8-festival/1340168223807045/" },
    { title: "FIVA World Motorcycle Rally 2026 – dzień 4", link: "https://fiva-wmr-2026.akhv.cz/" },
  ],
  "2026-06-20": [
    { title: "Moto Summer 8 - FESTIVAL – dzień 2", link: "https://facebook.com/events/s/moto-summer-8-festival/1340168223807045/" },
    { title: "FIVA World Motorcycle Rally 2026 – dzień 5", link: "https://fiva-wmr-2026.akhv.cz/" },
  ],
  "2026-06-21": [
    { title: "Moto Summer 8 - FESTIVAL – dzień 3", link: "https://facebook.com/events/s/moto-summer-8-festival/1340168223807045/" },
    { title: "FIVA World Motorcycle Rally 2026 – dzień 6", link: "https://fiva-wmr-2026.akhv.cz/" },
    { title: "III Miechowski Zlot Klasyków Miechów w PRL-u", link: "https://facebook.com/events/s/iii-miechowski-zlot-klasykow-m/1522105129027381/" },
  ],
  "2026-07-02": [
    { title: "OSAKA - 10th Anniversary | Zlot Fanów Japońskiej Motoryzacji", link: "https://facebook.com/events/s/osaka-10th-anniversary-i-zlot-/783523851160423/" },
  ],
  "2026-07-11": [
    { title: "DUB IT Tuning Festiwal 2k26", link: "https://www.facebook.com/DUB.IT.CK/?locale=pl_PL" },
  ],
  "2026-07-22": [
    { title: "34. Ennstal-Classic – dzień 1", link: "https://www.facebook.com/951037973804467" },
  ],
  "2026-07-23": [
    { title: "34. Ennstal-Classic – dzień 2", link: "https://www.facebook.com/951037973804467" },
  ],
  "2026-07-24": [
    { title: "34. Ennstal-Classic – dzień 3", link: "https://www.facebook.com/951037973804467" },
  ],
  "2026-07-25": [
    { title: "34. Ennstal-Classic – dzień 4", link: "https://www.facebook.com/951037973804467" },
  ],
  "2026-07-26": [
    { title: "Wzlotowisko 2k26", link: "https://www.facebook.com/events/gniezno/wzlotowisko-2k26/4099196460336037/" },
  ],
  "2026-08-01": [
    { title: "XVIII Zlot Zabytkowych Pojazdów – dzień 1", link: "https://www.miasteczko-galicyjskie.pl/?page_id=2903&fbclid=IwAR2i2JGC5xU6Q0yd7IbTsDcRy2XKbA6Gr6BW1nay5cwHi8JgshAxIqALpfM" },
  ],
  "2026-08-02": [
    { title: "XVIII Zlot Zabytkowych Pojazdów – dzień 2", link: "https://www.miasteczko-galicyjskie.pl/?page_id=2903&fbclid=IwAR2i2JGC5xU6Q0yd7IbTsDcRy2XKbA6Gr6BW1nay5cwHi8JgshAxIqALpfM" },
  ],
  "2026-08-07": [
    { title: "E36 Meeting Poland 2026 – dzień 1", link: "https://facebook.com/events/s/e36-meeting-poland-2026/1334826828010304/" },
  ],
  "2026-08-08": [
    { title: "E36 Meeting Poland 2026 – dzień 2", link: "https://facebook.com/events/s/e36-meeting-poland-2026/1334826828010304/" },
  ],
  "2026-08-09": [
    { title: "E36 Meeting Poland 2026 – dzień 3", link: "https://facebook.com/events/s/e36-meeting-poland-2026/1334826828010304/" },
  ],
  "2026-08-21": [
    { title: "XI Zlot FSO", link: "https://facebook.com/events/s/xi-zlot-fso/2506523996398991/" },
  ],
  "2026-09-18": [
    { title: "10. Jubileuszowa edycja Retro Motor Show – dzień 1", link: "https://facebook.com/events/s/10-jubileuszowa-edycja-retro-m/2490176171377135/" },
  ],
  "2026-09-19": [
    { title: "III runda Via Classic Cup", link: "https://www.facebook.com/ViaPrestigeEurope/" },
    { title: "10. Jubileuszowa edycja Retro Motor Show – dzień 2", link: "https://facebook.com/events/s/10-jubileuszowa-edycja-retro-m/2490176171377135/" },
  ],
  "2026-09-20": [
    { title: "10. Jubileuszowa edycja Retro Motor Show – dzień 3", link: "https://facebook.com/events/s/10-jubileuszowa-edycja-retro-m/2490176171377135/" },
  ],
  "2026-09-05": [
    { title: "VIA ITALIA 2026", link: "https://facebook.com/events/s/via-italia-2026/1339090714621019/" },
    { title: "Street Dreams 2026", link: "https://facebook.com/813483028218717/" },
  ],
  "2026-10-11": [
    { title: "6. Hubertus Classic", link: "https://www.facebook.com/2436887856712691" },
    { title: "Ogólnopolski zlot PT Cruiser Bieszczady 2026 – dzień 1", link: "https://ptclub.pl/topic/14799-og%C3%B3lnopolski-zlot-pt-cruiser-bieszczady-2026/" },
  ],
  "2026-10-12": [
    { title: "Ogólnopolski zlot PT Cruiser Bieszczady 2026 – dzień 2", link: "https://ptclub.pl/topic/14799-og%C3%B3lnopolski-zlot-pt-cruiser-bieszczady-2026/" },
  ],
  "2026-10-13": [
    { title: "Ogólnopolski zlot PT Cruiser Bieszczady 2026 – dzień 3", link: "https://ptclub.pl/topic/14799-og%C3%B3lnopolski-zlot-pt-cruiser-bieszczady-2026/" },
  ],
};

export default function CalendarModal({ isOpen, onClose }) {
  const [month, setMonth] = useState(1);
  const [year] = useState(2026);
  const [selectedDate, setSelectedDate] = useState(null);

  // 🔹 przy otwarciu modala ustawiamy miesiąc na bieżący
  useEffect(() => {
    if (isOpen) {
      const today = new Date();
      const currentMonth = today.getMonth() + 1; // 0-based index w JS
      setMonth(currentMonth);
    }
  }, [isOpen]);

  const daysInMonth = new Date(year, month, 0).getDate();
  // 0 = poniedziałek, ..., 6 = niedziela
  const jsDay = new Date(year, month - 1, 1).getDay(); // 0 = niedziela
  const firstDay = (jsDay + 6) % 7; // przesunięcie, żeby poniedziałek = 0


  const dates = [...Array(firstDay).fill(null), ...Array(daysInMonth).fill(0).map((_, i) => i + 1)];

  const formatDate = (d) => `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  const events = selectedDate ? EVENTS[formatDate(selectedDate)] || [] : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-neutral-900 rounded-xl p-4 w-full max-w-md sm:max-w-lg shadow-xl
             max-h-[80vh] sm:max-h-[90vh] overflow-y-auto relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Przycisk zamykania */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-300 hover:text-white text-xl p-1 z-[1000]"
              aria-label="Zamknij"
            >
              ✕
            </button>

            <div className="mt-4">
              <h2 className="text-xl font-semibold text-center">Kalendarz wydarzeń</h2>

              <div className="mt-4 flex gap-2 items-center justify-center">
                <button
                  onClick={() => setMonth((m) => (m === 1 ? 12 : m - 1))}
                  className="px-3 py-1 bg-neutral-800 rounded-lg"
                >
                  ←
                </button>
                <p className="text-lg font-medium">
                  {new Date(year, month - 1).toLocaleString("pl-PL", { month: "long" })} {year}
                </p>
                <button
                  onClick={() => setMonth((m) => (m === 12 ? 1 : m + 1))}
                  className="px-3 py-1 bg-neutral-800 rounded-lg"
                >
                  →
                </button>
              </div>

              {/* Kalendarz dni */}
              <div className="grid grid-cols-7 gap-2 mt-4 text-center text-neutral-300">
                {["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"].map((d) => (
                  <div key={d} className="font-semibold">{d}</div>
                ))}

                {dates.map((day, i) => {
                  if (!day) return <div key={i} />;

                  const dateKey = formatDate(day);
                  const eventsCount = EVENTS[dateKey]?.length || 0;

                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedDate(day)}
                      className={`relative py-2 rounded-lg transition flex flex-col items-center justify-center ${eventsCount > 0 ? "bg-red-600" : "bg-neutral-800"
                        } hover:bg-neutral-700`}
                    >
                      <span>{day}</span>
                      {eventsCount > 0 && (
                        <span className="mt-1 text-xs text-white/90 bg-black/50 px-1 rounded-full">
                          {eventsCount} event{eventsCount > 1 ? "y" : ""}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Lista wydarzeń */}
              <div className="mt-6">
                {selectedDate && (
                  <>
                    <h3 className="font-semibold text-lg mb-2">
                      Wydarzenia: {selectedDate}.{month}.{year}
                    </h3>

                    {events.length === 0 && (
                      <p className="text-neutral-400">Brak wydarzeń w tym dniu.</p>
                    )}

                    {events.map((ev, idx) => (
                      <a
                        key={idx}
                        href={ev.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-neutral-800 p-3 rounded-lg mb-2 hover:bg-neutral-700"
                      >
                        {ev.title}
                      </a>
                    ))}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
