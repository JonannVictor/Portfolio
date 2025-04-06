import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="h-screen flex items-center justify-center bg-gray-100 pt-20">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-5xl font-bold mb-4 text-gray-900">Olá, eu sou Jonann</h2>
        <p className="text-xl text-gray-700">
          Desenvolvedor Front-End apaixonado por criar interfaces incríveis.
        </p>
      </motion.div>
    </section>
  );
}