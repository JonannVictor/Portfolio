import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-zinc-100 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          Olá, eu sou <span className="text-indigo-600 dark:text-indigo-400">Jonann Victor</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Desenvolvedor Front-End apaixonado por criar experiências incríveis com React, Tailwind e Framer Motion.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;
