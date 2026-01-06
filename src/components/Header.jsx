import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo i nazwa */}
        <div className="flex items-center gap-4">
          <motion.div
            layoutId="logo"
            className="w-10 h-10 rounded-md bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center ring-1 ring-white/5"
          >
            <img
              src="/images/caroseryjni_logo_bl_wh.png"
              alt="Logo"
              className="w-[70%] h-[70%] object-contain"
            />
          </motion.div>
          <div className="flex flex-col">
            {/* Nazwa jako Link, select-none blokuje zaznaczanie */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold tracking-tight cursor-pointer select-none"
            >
              Caroseryjni
            </Link>
            <div className="text-xs text-neutral-400">Renata & Jakub</div>
          </div>
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-neutral-300">
          <Link to="/" className="hover:text-white transition">Start</Link>
          <Link to="/portfolio" className="hover:text-white transition">Portfolio</Link>
          <Link to="/o_nas" className="hover:text-white transition">O nas</Link>
          <Link to="/kontakt" className="hover:text-white transition">Kontakt</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="menu"
            aria-expanded={menuOpen}
            className="p-2 rounded-md ring-1 ring-white/5"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5"
          >
            <div className="px-5 py-4 flex flex-col gap-3 text-neutral-300">
              <Link to="/" onClick={() => setMenuOpen(false)}>Start</Link>
              <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
              <Link to="/o_nas" onClick={() => setMenuOpen(false)}>O nas</Link>
              <Link to="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
