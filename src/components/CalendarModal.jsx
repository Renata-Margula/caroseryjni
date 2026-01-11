import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EVENTS = {
  "2026-01-17": [
    { title: "Pelikan Team 14. Walimska Zimówka – dzień 1", link: "https://facebook.com/events/s/pelikan-team-14-walimska-zimow/1716813739035243/" },
  ],
  "2026-01-18": [
    { title: "Pelikan Team 14. Walimska Zimówka – dzień 2", link: "https://facebook.com/events/s/pelikan-team-14-walimska-zimow/1716813739035243/" },
  ],
  "2026-01-25": [
    { title: "Klasyki na 34 Finale WOŚP Wrocław - Fundacja Klasyczna Strefa Wrocław i Przyjaciele", link: "https://facebook.com/events/s/klasyki-na-34-finale-wosp-wroc/1243825684279538/" },
    { title: "Klasyki na torze Poznań WOŚP 2026", link: "https://facebook.com/events/s/klasyki-na-torze-poznan-wosp-2/856719616728298/" },
  ],
  "2026-01-28": [
    { title: "Targi Rétromobile – dzień 1", link: "https://www.facebook.com/RetromobileOfficiel" },
  ],
  "2026-01-29": [
    { title: "Targi Rétromobile – dzień 2", link: "https://www.facebook.com/RetromobileOfficiel" },
  ],
  "2026-01-30": [
    { title: "The Ice – dzień 1", link: "https://www.facebook.com/theicestmoritz" },
    { title: "Targi Rétromobile – dzień 3", link: "https://www.facebook.com/RetromobileOfficiel" },
    { title: "Bremen Classic Motorshow – dzień 1", link: "https://classicmotorshow.de/" },
  ],
  "2026-01-31": [
    { title: "The Ice – dzień 2", link: "https://www.facebook.com/theicestmoritz" },
    { title: "Targi Rétromobile – dzień 4", link: "https://www.facebook.com/RetromobileOfficiel" },
    { title: "F.A.T. Ice Race Zell am See", link: "https://fat-international.com/pages/ice-race-2026" },
    { title: "Bremen Classic Motorshow – dzień 2", link: "https://classicmotorshow.de/" },
  ],
  "2026-02-01": [
    { title: "Targi Rétromobile – dzień 5", link: "https://www.facebook.com/RetromobileOfficiel" },
    { title: "Bremen Classic Motorshow – dzień 3", link: "https://classicmotorshow.de/" },
  ],
  "2026-02-14": [
    { title: "Wrocławska Giełda Modeli Samochodowych 3! Edycja Walentynki", link: "https://facebook.com/events/s/wroc%C5%82awska-gie%C5%82da-modeli-samoc/2288256764984847/" },
  ],
  "2026-02-19": [
    { title: "RETRO CLASSICS® MESSE STUTTGART – dzień 1", link: "https://www.retro-classics.de/" },
  ],
  "2026-02-20": [
    { title: "RETRO CLASSICS® MESSE STUTTGART – dzień 2", link: "https://www.retro-classics.de/" },
  ],
  "2026-02-21": [
    { title: "KUSTOMHEAD 2026 – dzień 1", link: "https://facebook.com/events/s/kustomhead-2026-wystawa-zabytk/612633631500616/" },
    { title: "RETRO CLASSICS® MESSE STUTTGART – dzień 3", link: "https://www.retro-classics.de/" },
  ],
  "2026-02-22": [
    { title: "KUSTOMHEAD 2026 – dzień 2", link: "https://facebook.com/events/s/kustomhead-2026-wystawa-zabytk/612633631500616/" },
    { title: "RETRO CLASSICS® MESSE STUTTGART – dzień 4", link: "https://www.retro-classics.de/" },
  ],
  "2026-03-06": [
    { title: "Szlakiem sudeckich zamków – dzień 1", link: "https://facebook.com/events/s/szlakiem-sudeckich-zamkow/1594137225075869/" },
  ],
  "2026-03-07": [
    { title: "Auto Moto Retro PARMA", link: "https://automotoretro.it/" },
    { title: "Szlakiem sudeckich zamków – dzień 2", link: "https://facebook.com/events/s/szlakiem-sudeckich-zamkow/1594137225075869/" },
  ],
  "2026-03-08": [
    { title: "Kobieta za kółkiem VII", link: "https://facebook.com/events/s/kobieta-za-ko%C5%82kiem-vii-edycja/847104654407052/" },
    { title: "Szlakiem sudeckich zamków – dzień 3", link: "https://facebook.com/events/s/szlakiem-sudeckich-zamkow/1594137225075869/" },
  ],
  "2026-03-12": [
    { title: "Coppa delle Alpi – dzień 1", link: "https://1000miglia.it/en/events/coppa-delle-alpi/" },
  ],
  "2026-03-13": [
    { title: "Coppa delle Alpi – dzień 2", link: "https://1000miglia.it/en/events/coppa-delle-alpi/" },
  ],
  "2026-03-14": [
    { title: "XIV Targi Motocyklowe Wrocław Motorcycle Show 2026 – dzień 1", link: "https://facebook.com/events/s/xiv-targi-motocyklowe-wroc%C5%82aw-/2461003907589563/" },
    { title: "Coppa delle Alpi – dzień 3", link: "https://1000miglia.it/en/events/coppa-delle-alpi/" },
  ],
  "2026-03-15": [
    { title: "XIV Targi Motocyklowe Wrocław Motorcycle Show 2026 – dzień 2", link: "https://facebook.com/events/s/xiv-targi-motocyklowe-wroc%C5%82aw-/2461003907589563/" },
    { title: "Coppa delle Alpi – dzień 4", link: "https://1000miglia.it/en/events/coppa-delle-alpi/" },
  ],
  "2026-03-28": [
    { title: "II Edycja Drift Strefa X DS Games", link: "https://facebook.com/events/s/ii-edycja-drift-strefa-x-ds-ga/920038547020272/" },
  ],
  "2026-03-29": [
    { title: "Początek Sezonu C. S. Klasyków 2026", link: "https://facebook.com/events/s/poczatek-sezonu-cs-klasykow-20/1138154187974698/" },
  ],
  "2026-04-04": [
    { title: "Coffee and Cars Wielkanoc 2026", link: "https://facebook.com/events/s/coffee-and-cars-wielkanoc-2026/775840082168307/" },
  ],
  "2026-04-11": [
    { title: "I runda Via Classica Cup", link: "https://www.facebook.com/ViaPrestigeEurope/" },
    { title: "II Meeting Modelarski Pojazdów Cywilnych + Zlot Klasyków", link: "https://facebook.com/events/s/ii-meeting-modelarski-pojazdow/1464702117913664/" },
    { title: "VI Rajd Wilkowyje 2026 - rozpoczęcie sezonu", link: "https://facebook.com/events/s/vi-rajd-wilkowyje-2026-rozpocz/4278167829138371/" },
  ],
  "2026-04-16": [
    { title: "Anantara Concorso Roma – dzień 1", link: "https://www.facebook.com/AnantaraConcorsoRoma" },
  ],
  "2026-04-17": [
    { title: "Anantara Concorso Roma – dzień 2", link: "https://www.facebook.com/AnantaraConcorsoRoma" },
  ],
  "2026-04-18": [
    { title: "Zlot klasycznej motoryzacji - start sezonu", link: "https://www.facebook.com/events/1725509802183080/" },
    { title: "Motor Vintage Bazar - edycja letnia", link: "https://facebook.com/events/s/motor-vintage-bazar-edycja-let/798296532590367/" },
    { title: "Anantara Concorso Roma – dzień 3", link: "https://www.facebook.com/AnantaraConcorsoRoma" },
    { title: "MOTO CASTLE FEST 2026", link: "https://facebook.com/events/s/moto-castle-fest-2026-x-zamek-/25532706783083026/" },
  ],
  "2026-04-19": [
    { title: "Anantara Concorso Roma – dzień 4", link: "https://www.facebook.com/AnantaraConcorsoRoma" },
  ],
  "2026-04-23": [
    { title: "Poznań Motor Show – dzień 1", link: "https://www.facebook.com/PoznanMotorShow/" },
  ],
  "2026-04-24": [
    { title: "Poznań Motor Show – dzień 2", link: "https://www.facebook.com/PoznanMotorShow/" },
    { title: "Grand Prix de Monaco Historique – dzień 1", link: "https://www.monacograndprixhistoric.com/" },
  ],
  "2026-04-25": [
    { title: "Poznań Motor Show – dzień 3", link: "https://www.facebook.com/PoznanMotorShow/" },
    { title: "VII Zlot Klasyków Rozruch", link: "https://www.facebook.com/events/1113615016565120/" },
    { title: "Grand Prix de Monaco Historique – dzień 2", link: "https://www.monacograndprixhistoric.com/" },
    { title: "AUTOPIA – dzień 1", link: "https://autopia.events/" },
  ],
  "2026-04-26": [
    { title: "Poznań Motor Show – dzień 4", link: "https://www.facebook.com/PoznanMotorShow/" },
    { title: "Grand Prix de Monaco Historique – dzień 3", link: "https://www.monacograndprixhistoric.com/" },
    { title: "AUTOPIA – dzień 2", link: "https://autopia.events/" },
    { title: "10-lecie Jeleniogórskich Klasyków", link: "https://facebook.com/events/s/10-lecie-jeleniogorskich-klasy/1127714499440196/" },
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
  "2026-05-09": [
    { title: "IV Zlot Pojazdow Służb Mundurowych Zaniemyśl – dzień 1", link: "https://facebook.com/events/s/iv-zlot-pojazdow-s%C5%82uzb-munduro/1725707568430078/" },
  ],
  "2026-05-10": [
    { title: "Retro Biesiada Wądroże Wielkie 2026", link: "https://facebook.com/events/s/retro-biesiada-wadroze-wielkie/1218419223514998/" },
    { title: "IV Zlot Pojazdow Służb Mundurowych Zaniemyśl – dzień 2", link: "https://facebook.com/events/s/iv-zlot-pojazdow-s%C5%82uzb-munduro/1725707568430078/" },
  ],
  "2026-05-15": [
    { title: "Concorso d'Eleganza Villa d'Este – dzień 1", link: "https://concorsodeleganzavilladeste.com/blocks/home" },
    { title: "XVI ZLOT AUT AMERYKAŃSKICH I ZABYTKOWYCH", link: "https://facebook.com/events/s/xvi-zlot-aut-amerykanskich-i-z/1532515697900973/" },
  ],
  "2026-05-16": [
    { title: "II runda Via Classica Cup", link: "https://www.facebook.com/ViaPrestigeEurope/" },
    { title: "Concorso d'Eleganza Villa d'Este – dzień 2", link: "https://concorsodeleganzavilladeste.com/blocks/home" },
    { title: "FuoriConcorso – dzień 1", link: "https://www.fuoriconcorso.org/" },
    { title: "BANZAI Car Event 2026 Łódź", link: "https://facebook.com/events/s/banzai-car-event-2026-%C5%82odz-ogr/2009463839840856/" },
  ],
  "2026-05-17": [
    { title: "Concorso d'Eleganza Villa d'Este – dzień 3", link: "https://concorsodeleganzavilladeste.com/blocks/home" },
    { title: "FuoriConcorso – dzień 2", link: "https://www.fuoriconcorso.org/" },
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
    { title: "Zlot Mercedes-Benz Gathering 140th Anniversary - Toruń 2026", link: "https://facebook.com/events/s/zlot-mercedes-benz-gathering-1/2121683435001750/" },
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
    { title: "IV Polkowicki Zlot Pojazdów Zabytkowych", link: "https://facebook.com/events/s/iv-polkowicki-zlot-pojazdow-za/917497204282375/" },
  ],
  "2026-06-01": [
    { title: "International Mini Meeting – dzień 5", link: "https://imm2026.pl/" },
  ],
  "2026-06-04": [
    { title: "10 edycja Charytatywnego Rajdu Koguta – dzień 1", link: "https://rajdkoguta.com.pl/" },
  ],
  "2026-06-05": [
    { title: "10 edycja Charytatywnego Rajdu Koguta – dzień 2", link: "https://rajdkoguta.com.pl/" },
  ],
  "2026-06-06": [
    { title: "10 edycja Charytatywnego Rajdu Koguta – dzień 3", link: "https://rajdkoguta.com.pl/" },
  ],
  "2026-06-09": [
    { title: "Mille Miglia – dzień 1", link: "https://1000miglia.it/en/events/1000-miglia/1000-miglia-2026/" },
  ],
  "2026-06-10": [
    { title: "VIA PRESTIGE – dzień 1", link: "https://www.facebook.com/ViaPrestigeEurope/" },
    { title: "Mille Miglia – dzień 2", link: "https://1000miglia.it/en/events/1000-miglia/1000-miglia-2026/" },
    { title: "1000 mil československých – dzień 1", link: "https://1000milceskoslovenskych.cz/" },
  ],
  "2026-06-11": [
    { title: "VIA PRESTIGE – dzień 2", link: "https://www.facebook.com/ViaPrestigeEurope/" },
    { title: "Classica Mierzęcin – dzień 1", link: "https://www.facebook.com/share/1BgXCrttuc/" },
    { title: "Mille Miglia – dzień 3", link: "https://1000miglia.it/en/events/1000-miglia/1000-miglia-2026/" },
    { title: "1000 mil československých – dzień 2", link: "https://1000milceskoslovenskych.cz/" },
  ],
  "2026-06-12": [
    { title: "VIA PRESTIGE – dzień 3", link: "https://www.facebook.com/ViaPrestigeEurope/" },
    { title: "Classica Mierzęcin – dzień 2", link: "https://www.facebook.com/share/1BgXCrttuc/" },
    { title: "ZLOT DODGE RAM POLAND 6 edycja", link: "https://facebook.com/events/s/zlot-dodge-ram-poland-edycja-6/1216861129652928/" },
    { title: "Mille Miglia – dzień 4", link: "https://1000miglia.it/en/events/1000-miglia/1000-miglia-2026/" },
    { title: "1000 mil československých – dzień 3", link: "https://1000milceskoslovenskych.cz/" },
  ],
  "2026-06-13": [
    { title: "VIA PRESTIGE – dzień 4", link: "https://www.facebook.com/ViaPrestigeEurope/" },
    { title: "Classica Mierzęcin – dzień 3", link: "https://www.facebook.com/share/1BgXCrttuc/" },
    { title: "Mille Miglia – dzień 5", link: "https://1000miglia.it/en/events/1000-miglia/1000-miglia-2026/" },
    { title: "1000 mil československých – dzień 4", link: "https://1000milceskoslovenskych.cz/" },
    { title: "IV Rogoziński Zlot Motoryzacyjny", link: "https://facebook.com/events/s/iv-rogozinski-zlot-motoryzacyj/814334661643456/" },
  ],
  "2026-06-14": [
    { title: "Classica Mierzęcin – dzień 4", link: "https://www.facebook.com/share/1BgXCrttuc/" },
    { title: "II zlot Klasyczne Pojazdy w Pałacowych Ogrodach", link: "https://www.facebook.com/events/2289834444762772/" },
    { title: "13 Zlot pojazdów zabytkowych i klasycznych w Mszczonowie - 'Trzynastka to nie pech'", link: "https://facebook.com/events/s/13-zlot-pojazdow-zabytkowych-i/791980083796335/" },
    { title: "III Turystyczny Rajd Pojazdów Zabytkowych Geoparku Kraina Wygasłych Wulkanów", link: "https://facebook.com/events/s/iii-turystyczny-rajd-pojazdow-/918174083890186/" },
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
    { title: "CSG Automotive Event 2026", link: "https://facebook.com/events/s/csg-automotive-event-2026-even/1398389201746471/" },
  ],
  "2026-06-21": [
    { title: "Moto Summer 8 - FESTIVAL – dzień 3", link: "https://facebook.com/events/s/moto-summer-8-festival/1340168223807045/" },
    { title: "FIVA World Motorcycle Rally 2026 – dzień 6", link: "https://fiva-wmr-2026.akhv.cz/" },
    { title: "III Miechowski Zlot Klasyków Miechów w PRL-u", link: "https://facebook.com/events/s/iii-miechowski-zlot-klasykow-m/1522105129027381/" },
    { title: "8. Zlot Klasyków w Kowarach", link: "https://facebook.com/events/s/8-zlot-klasykow-w-kowarach/855514190674218/" },
  ],
  "2026-06-26": [
    { title: "Supercar Owners Circle x Classic Driver – dzień 1", link: "https://www.supercarownerscircle.com/about/events/" },
    { title: "Aurora Concours – dzień 1", link: "https://www.theaurora.se/" },
  ],
  "2026-06-27": [
    { title: "ULTRACE POLAND 2026 – dzień 1", link: "https://facebook.com/events/s/ultrace-poland-2026-eternal-cu/1898818380747841/" },
    { title: "Supercar Owners Circle x Classic Driver – dzień 2", link: "https://www.supercarownerscircle.com/about/events/" },
    { title: "Aurora Concours – dzień 2", link: "https://www.theaurora.se/" },
    { title: "Zlot Pojazdów Klasycznych I Zabytkowych Retro Show VII – dzień 1", link: "https://facebook.com/events/s/zlot-pojazdow-klasycznych-i-za/1152496260207123/" },
  ],
  "2026-06-28": [
    { title: "ULTRACE POLAND 2026 – dzień 2", link: "https://facebook.com/events/s/ultrace-poland-2026-eternal-cu/1898818380747841/" },
    { title: "Supercar Owners Circle x Classic Driver – dzień 3", link: "https://www.supercarownerscircle.com/about/events/" },
    { title: "Aurora Concours – dzień 3", link: "https://www.theaurora.se/" },
    { title: "Zlot Pojazdów Klasycznych I Zabytkowych Retro Show VII – dzień 2", link: "https://facebook.com/events/s/zlot-pojazdow-klasycznych-i-za/1152496260207123/" },
  ],
  "2026-07-02": [
    { title: "OSAKA - 10th Anniversary | Zlot Fanów Japońskiej Motoryzacji", link: "https://facebook.com/events/s/osaka-10th-anniversary-i-zlot-/783523851160423/" },
    { title: "Le Mans Classic Legends – dzień 1", link: "https://www.facebook.com/events/705773982437140" },
  ],
  "2026-07-03": [
    { title: "Le Mans Classic Legends – dzień 2", link: "https://www.facebook.com/events/705773982437140" },
  ],
  "2026-07-04": [
    { title: "Le Mans Classic Legends – dzień 3", link: "https://www.facebook.com/events/705773982437140" },
    { title: "Concours of Elegance Germany – dzień 1", link: "https://concoursofelegancegermany.com/" },
  ],
  "2026-07-05": [
    { title: "Le Mans Classic Legends – dzień 4", link: "https://www.facebook.com/events/705773982437140" },
    { title: "Concours of Elegance Germany – dzień 2", link: "https://concoursofelegancegermany.com/" },
  ],
  "2026-07-09": [
    { title: "Goodwood Festival of Speed – dzień 1", link: "https://www.facebook.com/events/1260082418934107" },
  ],
  "2026-07-10": [
    { title: "Goodwood Festival of Speed – dzień 2", link: "https://www.facebook.com/events/1260082418934107" },
    { title: "British Classic Car Meeting St. Moritz – dzień 1", link: "https://www.bccm-stmoritz.ch/en/" },
    { title: "Zakręcone koła PRL - VOL. 2 – dzień 1", link: "https://facebook.com/events/s/zakrecone-ko%C5%82a-prl-vol-2/958631062996477/" },
  ],
  "2026-07-11": [
    { title: "DUB IT Tuning Festiwal 2k26", link: "https://www.facebook.com/DUB.IT.CK/?locale=pl_PL" },
    { title: "Goodwood Festival of Speed – dzień 3", link: "https://www.facebook.com/events/1260082418934107" },
    { title: "British Classic Car Meeting St. Moritz – dzień 2", link: "https://www.bccm-stmoritz.ch/en/" },
    { title: "Zakręcone koła PRL - VOL. 2 – dzień 2", link: "https://facebook.com/events/s/zakrecone-ko%C5%82a-prl-vol-2/958631062996477/" },
  ],
  "2026-07-12": [
    { title: "Goodwood Festival of Speed – dzień 4", link: "https://www.facebook.com/events/1260082418934107" },
    { title: "British Classic Car Meeting St. Moritz – dzień 3", link: "https://www.bccm-stmoritz.ch/en/" },
    { title: "Zakręcone koła PRL - VOL. 2 – dzień 3", link: "https://facebook.com/events/s/zakrecone-ko%C5%82a-prl-vol-2/958631062996477/" },
    { title: "WAKACJE KLASYCZNIE 2026 #RETROMOTORSPORT", link: "https://facebook.com/events/s/wakacje-klasycznie-2026-retrom/3731044073868519/" },
  ],
  "2026-07-22": [
    { title: "34. Ennstal-Classic – dzień 1", link: "https://www.facebook.com/951037973804467" },
  ],
  "2026-07-23": [
    { title: "34. Ennstal-Classic – dzień 2", link: "https://www.facebook.com/951037973804467" },
  ],
  "2026-07-24": [
    { title: "34. Ennstal-Classic – dzień 3", link: "https://www.facebook.com/951037973804467" },
    { title: "JAPFEST 2026 TOR POZNAŃ – dzień 1", link: "https://facebook.com/events/s/japfest-2026-tor-poznan-13th-i/1360288055745793/" },
  ],
  "2026-07-25": [
    { title: "34. Ennstal-Classic – dzień 4", link: "https://www.facebook.com/951037973804467" },
    { title: "JAPFEST 2026 TOR POZNAŃ – dzień 2", link: "https://facebook.com/events/s/japfest-2026-tor-poznan-13th-i/1360288055745793/" },
  ],
  "2026-07-26": [
    { title: "Wzlotowisko 2k26", link: "https://www.facebook.com/events/gniezno/wzlotowisko-2k26/4099196460336037/" },
    { title: "JAPFEST 2026 TOR POZNAŃ – dzień 3", link: "https://facebook.com/events/s/japfest-2026-tor-poznan-13th-i/1360288055745793/" },
  ],
  "2026-08-01": [
    { title: "XVIII Zlot Zabytkowych Pojazdów – dzień 1", link: "https://www.miasteczko-galicyjskie.pl/?page_id=2903&fbclid=IwAR2i2JGC5xU6Q0yd7IbTsDcRy2XKbA6Gr6BW1nay5cwHi8JgshAxIqALpfM" },
    { title: "CarsLovers Tuners Meeting – dzień 1", link: "https://facebook.com/events/s/carslovers-tuners-meeting-cl12/642548475526123/" },
  ],
  "2026-08-02": [
    { title: "XVIII Zlot Zabytkowych Pojazdów – dzień 2", link: "https://www.miasteczko-galicyjskie.pl/?page_id=2903&fbclid=IwAR2i2JGC5xU6Q0yd7IbTsDcRy2XKbA6Gr6BW1nay5cwHi8JgshAxIqALpfM" },
    { title: "CarsLovers Tuners Meeting – dzień 1", link: "https://facebook.com/events/s/carslovers-tuners-meeting-cl12/642548475526123/" },
  ],
  "2026-08-07": [
    { title: "E36 Meeting Poland 2026 – dzień 1", link: "https://facebook.com/events/s/e36-meeting-poland-2026/1334826828010304/" },
    { title: "POJECHANY ZLOT – dzień 1", link: "https://facebook.com/events/s/pojechany-zlot-2026/1192684306337899/" },
  ],
  "2026-08-08": [
    { title: "E36 Meeting Poland 2026 – dzień 2", link: "https://facebook.com/events/s/e36-meeting-poland-2026/1334826828010304/" },
    { title: "POJECHANY ZLOT – dzień 2", link: "https://facebook.com/events/s/pojechany-zlot-2026/1192684306337899/" },
  ],
  "2026-08-09": [
    { title: "E36 Meeting Poland 2026 – dzień 3", link: "https://facebook.com/events/s/e36-meeting-poland-2026/1334826828010304/" },
    { title: "POJECHANY ZLOT – dzień 3", link: "https://facebook.com/events/s/pojechany-zlot-2026/1192684306337899/" },
  ],
  "2026-08-14": [
    { title: "22 Ogólnopolski Zlot 126P - Krzykawka – dzień 1", link: "https://facebook.com/events/s/22-ogolnopolski-zlot-126-krzyk/1354840892517867/" },
  ],
  "2026-08-15": [
    { title: "22 Ogólnopolski Zlot 126P - Krzykawka – dzień 2", link: "https://facebook.com/events/s/22-ogolnopolski-zlot-126-krzyk/1354840892517867/" },
  ],
  "2026-08-16": [
    { title: "22 Ogólnopolski Zlot 126P - Krzykawka – dzień 3", link: "https://facebook.com/events/s/22-ogolnopolski-zlot-126-krzyk/1354840892517867/" },
  ],
  "2026-08-21": [
    { title: "XI Zlot FSO", link: "https://facebook.com/events/s/xi-zlot-fso/2506523996398991/" },
  ],
  "2026-08-29": [
    { title: "Polski Rajd Legend – dzień 1", link: "http://prl.org.pl/" },
    { title: "VI Festiwal Pojazdów Nieznanych, Nieudanych i Zapomnianych", link: "https://facebook.com/events/s/vi-festiwal-pojazdow-nieznanyc/1156532899981879/" },
  ],
  "2026-08-30": [
    { title: "Polski Rajd Legend – dzień 2", link: "http://prl.org.pl/" },
  ],
  "2026-09-11": [
    { title: "Bernina GranTurismo – dzień 1", link: "https://www.facebook.com/berninagranturismo" },
  ],
  "2026-09-12": [
    { title: "Bernina GranTurismo – dzień 2", link: "https://www.facebook.com/berninagranturismo" },
  ],
  "2026-09-13": [
    { title: "Bernina GranTurismo – dzień 3", link: "https://www.facebook.com/berninagranturismo" },
  ],
  "2026-09-18": [
    { title: "10. Jubileuszowa edycja Retro Motor Show – dzień 1", link: "https://facebook.com/events/s/10-jubileuszowa-edycja-retro-m/2490176171377135/" },
    { title: "BALTICTREFFEN 6TH 2026 BY VOLKSTEAM – dzień 1", link: "https://facebook.com/events/s/baltictreffen-6th-2026-by-volk/1127098252867051/" }
  ],
  "2026-09-19": [
    { title: "III runda Via Classica Cup", link: "https://www.facebook.com/ViaPrestigeEurope/" },
    { title: "10. Jubileuszowa edycja Retro Motor Show – dzień 2", link: "https://facebook.com/events/s/10-jubileuszowa-edycja-retro-m/2490176171377135/" },
    { title: "BALTICTREFFEN 6TH 2026 BY VOLKSTEAM – dzień 2", link: "https://facebook.com/events/s/baltictreffen-6th-2026-by-volk/1127098252867051/" }
  ],
  "2026-09-20": [
    { title: "10. Jubileuszowa edycja Retro Motor Show – dzień 3", link: "https://facebook.com/events/s/10-jubileuszowa-edycja-retro-m/2490176171377135/" },
    { title: "BALTICTREFFEN 6TH 2026 BY VOLKSTEAM – dzień 3", link: "https://facebook.com/events/s/baltictreffen-6th-2026-by-volk/1127098252867051/" }
  ],
  "2026-09-05": [
    { title: "VIA ITALIA 2026", link: "https://facebook.com/events/s/via-italia-2026/1339090714621019/" },
    { title: "Street Dreams 2026", link: "https://facebook.com/813483028218717/" },
  ],
  "2026-10-07": [
    { title: "Grand Prix Polski Pojazdów Zabytkowych – dzień 1", link: "https://gpppz.pl/" },
    { title: "ZOUTE GRAND PRIX CAR WEEK – dzień 1", link: "https://www.zoutegrandprix.be/en" },
  ],
  "2026-10-08": [
    { title: "Grand Prix Polski Pojazdów Zabytkowych – dzień 2", link: "https://gpppz.pl/" },
    { title: "ZOUTE GRAND PRIX CAR WEEK – dzień 2", link: "https://www.zoutegrandprix.be/en" },
  ],
  "2026-10-09": [
    { title: "Grand Prix Polski Pojazdów Zabytkowych – dzień 3", link: "https://gpppz.pl/" },
    { title: "ZOUTE GRAND PRIX CAR WEEK – dzień 3", link: "https://www.zoutegrandprix.be/en" },
  ],
  "2026-10-10": [
    { title: "Grand Prix Polski Pojazdów Zabytkowych – dzień 4", link: "https://gpppz.pl/" },
    { title: "ZOUTE GRAND PRIX CAR WEEK – dzień 4", link: "https://www.zoutegrandprix.be/en" },
  ],
  "2026-10-11": [
    { title: "6. Hubertus Classic", link: "https://www.facebook.com/2436887856712691" },
    { title: "Ogólnopolski zlot PT Cruiser Bieszczady 2026 – dzień 1", link: "https://ptclub.pl/topic/14799-og%C3%B3lnopolski-zlot-pt-cruiser-bieszczady-2026/" },
    { title: "Grand Prix Polski Pojazdów Zabytkowych – dzień 5", link: "https://gpppz.pl/" },
    { title: "ZOUTE GRAND PRIX CAR WEEK – dzień 5", link: "https://www.zoutegrandprix.be/en" },
  ],
  "2026-10-12": [
    { title: "Ogólnopolski zlot PT Cruiser Bieszczady 2026 – dzień 2", link: "https://ptclub.pl/topic/14799-og%C3%B3lnopolski-zlot-pt-cruiser-bieszczady-2026/" },
  ],
  "2026-10-13": [
    { title: "Ogólnopolski zlot PT Cruiser Bieszczady 2026 – dzień 3", link: "https://ptclub.pl/topic/14799-og%C3%B3lnopolski-zlot-pt-cruiser-bieszczady-2026/" },
  ],
  "2026-10-22": [
    { title: "Auto e Moto d’Epoca w Bolonii – dzień 1", link: "https://autoemotodepoca.com/" },
  ],
  "2026-10-23": [
    { title: "Auto e Moto d’Epoca w Bolonii – dzień 2", link: "https://autoemotodepoca.com/" },
  ],
  "2026-10-24": [
    { title: "Auto e Moto d’Epoca w Bolonii – dzień 3", link: "https://autoemotodepoca.com/" },
  ],
  "2026-10-25": [
    { title: "Auto e Moto d’Epoca w Bolonii – dzień 4", link: "https://autoemotodepoca.com/" },
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
