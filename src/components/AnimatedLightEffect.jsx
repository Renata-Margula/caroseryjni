import { motion } from "framer-motion";

export default function AnimatedLightEffect() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: ["-50%", "50%"], opacity: [0, 0.6, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
      />
    </div>
  );
}
