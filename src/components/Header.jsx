import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-gray-900 text-white p-4 shadow-md fixed top-0 w-full z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jonann Victor</h1>

        {}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {}
        <ul className="hidden md:flex space-x-4">
          <li><a href="#about" className="hover:text-blue-400">Sobre</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projetos</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contato</a></li>
        </ul>
      </div>

      {}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 px-4 py-4 space-y-2"
          >
            <li><a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Sobre</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Projetos</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Contato</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
