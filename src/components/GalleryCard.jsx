import { motion } from "framer-motion";

export default function GalleryCard({ image, i, onOpen, onAddToCart }) {
  const imgSrc = typeof image === "string" ? image : image.src;
  const imgAlt = typeof image === "string" ? `photo-${i}` : (image.caption || `photo-${i}`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.05 }}
      className="rounded-lg overflow-hidden"
    >
      <button
        onClick={onOpen}
        className="group block w-full h-full focus:outline-none relative"
      >
        <div className="w-full aspect-[4/3] overflow-hidden relative">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Caption — zawsze widoczny */}
          {image.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-sm md:text-base py-2 px-3 text-center">
              {image.caption}
            </div>
          )}
        </div>
      </button>

      {onAddToCart && (
        <button
          onClick={onAddToCart}
          className="mt-2 py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Dodaj do koszyka
        </button>
      )}
    </motion.div>
  );
}
