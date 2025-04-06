import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-zinc-100 dark:bg-zinc-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
          Sobre Mim
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 text-lg">
          Olá! Me chamo Jonann Victor, um desenvolvedor front-end apaixonado por transformar ideias em interfaces incríveis. 
          Tenho experiência com tecnologias como React, Tailwind CSS e JavaScript, buscando sempre criar experiências modernas, acessíveis e envolventes.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
