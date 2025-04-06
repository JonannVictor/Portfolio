import { motion } from 'framer-motion';

export default function ProjectCard({ nome, desc, link }) {
  return (
    <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold mb-2">{nome}</h3>
      <p className="text-gray-400 mb-4">{desc}</p>
      <a href={link} target="_blank" className="text-blue-400 hover:underline">Ver projeto</a>
    </motion.div>
  );
}