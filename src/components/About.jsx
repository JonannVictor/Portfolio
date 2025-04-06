import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-100 pt-28 px-4"
    >
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Olá, eu sou Jonann
        </h2>
        <p className="text-lg md:text-xl text-gray-700">
          Desenvolvedor Front-End 
        </p>
      </motion.div>
    </section>
  );
}
