import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AccordionItem({ title, content, media }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = `accordion-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="border-b border-white/10 py-3">
      <button
        onClick={() => setIsOpen(v => !v)}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full text-left flex justify-between items-center text-neutral-200 font-medium"
      >
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-2 text-neutral-300 overflow-hidden"
          >
            <p>{content}</p>
            {media?.type === "image" && (
              <img
                src={media.src}
                alt={title}
                className="mt-2 rounded-md"
                loading="lazy"
              />
            )}
            {media?.type === "video" && (
              <video
                src={media.src}
                controls
                className="mt-2 w-full rounded-md"
                controlsList="nodownload nofullscreen noremoteplayback"
                onContextMenu={(e) => e.preventDefault()} // blokuje prawy klik
                disablePictureInPicture
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
