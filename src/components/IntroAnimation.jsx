import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation({ onFinish }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isReload =
      typeof window !== "undefined" &&
      performance?.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onFinish) onFinish(); // powiadom App, że koniec intro
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // jeśli to nie jest odświeżenie, od razu powiadom App
      if (onFinish) onFinish();
    }
  }, [onFinish]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="/images/caroseryjni_logo_bl_wh.png"
            alt="Logo Caroseryjni"
            initial={{ scale: 3 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-32 h-32 object-contain"
            loading="eager"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
