import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ScrollImage({ src, alt, index, caption }) {
  const controlsImage = useAnimation();
  const controlsText = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  const direction = index % 2 === 0 ? 100 : -100;

  // Scroll parallax
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 500], [0, 50]); // delikatny ruch w osi Y

  useEffect(() => {
    if (inView) {
      controlsImage.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });

      controlsText.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
      });
    } else {
      controlsImage.start({
        x: direction,
        opacity: 0,
        scale: 1.05,
        transition: { duration: 0.8, ease: "easeOut" },
      });
      controlsText.start({
        y: 30,
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [controlsImage, controlsText, inView, direction]);

  return (
    <div ref={ref} className="w-full mb-12 relative z-0 rounded-xl overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-[40vh] sm:h-[50vh] md:h-[80vh] rounded-xl object-cover"
        loading="lazy"
        initial={{ x: direction, opacity: 0, scale: 1.05 }}
        animate={controlsImage}
        style={{ y: yOffset, willChange: "transform" }}
        whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
        transition={{ duration: 0.5 }}
      />
      {/* Tekst w centrum */}
      {caption && (
        <motion.div
          className="
    absolute inset-0 flex items-center justify-center text-center
    px-8
    text-[clamp(1.5rem,5vw,3rem)]
    font-extrabold tracking-wide
    text-white
    drop-shadow-[0_4px_25px_rgba(0,0,0,0.85)]
    max-w-4xl mx-auto
  "
          initial={{ y: 30, opacity: 0, scale: 0.95 }}
          animate={controlsText}
        >
          <span className="
    bg-black/40 backdrop-blur-sm
    px-6 py-3
    rounded-2xl
    shadow-[0_10px_40px_rgba(0,0,0,0.6)]
  ">
            {caption}
          </span>
        </motion.div>

      )}

    </div>
  );
}
