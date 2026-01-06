import { useEffect, useRef, useState } from "react";

export default function ParallaxHero({ image, title, subtitle }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const offset = Math.min(Math.max(-rect.top / 3, -100), 100);
          el.style.transform = `translateY(${offset}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    setVisible(true); // fade-in po mount
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const src = image?.src ?? image;

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <div ref={ref} className="w-full h-full transform transition-transform duration-300 will-change-transform pointer-events-none">
        <img
          src={src}
          srcSet="/images/hero-small.jpg 640w, /images/hero.jpg 1200w"
          sizes="100vw"
          alt="hero"
          className="w-full h-full object-cover brightness-75"
          loading="lazy"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black" />

      {/* Tekst hero */}
      <div className={`absolute inset-0 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
        <h1 className="text-4xl md:text-6xl font-bold text-white">{title}</h1>
        <p className="mt-4 text-lg md:text-2xl text-neutral-200">{subtitle}</p>
      </div>
    </section>
  );
}
