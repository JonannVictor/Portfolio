import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.nav 
      className="bg-gray-900 text-white p-4 shadow-md fixed top-0 w-full z-10"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jonann Victor</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-blue-400">Sobre</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projetos</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contato</a></li>
        </ul>
      </div>
    </motion.nav>
  );
}
