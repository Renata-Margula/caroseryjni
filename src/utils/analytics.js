// utils/analytics.js
export function loadGoogleAnalytics() {
    if (window.gtag) return; // zapobiega podwójnemu załadowaniu

    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"; // ← tu wstaw swój ID
    script1.async = true;
    document.head.appendChild(script1);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-XXXXXXXXXX"); // ← i tu ten sam ID
}
