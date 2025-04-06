import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="w-full py-4 px-6 bg-white dark:bg-zinc-800 shadow-md sticky top-0 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70 }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Jonann Victor</h1>
        <nav className="space-x-6 text-sm md:text-base">
          <a href="#hero" className="hover:text-indigo-500 transition-colors">Início</a>
          <a href="#projects" className="hover:text-indigo-500 transition-colors">Projetos</a>
          <a href="#contact" className="hover:text-indigo-500 transition-colors">Contato</a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
