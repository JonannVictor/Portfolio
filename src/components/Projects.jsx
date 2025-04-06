import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Landing Page - Academia",
    description: "Uma landing page moderna desenvolvida com HTML, CSS e JavaScript para o Instituto Ev. Responsiva e com ótimo design.",
    link: "https://github.com/JonannVictor/Projeto-Cliente_InstitutoEv",
    image: "/images/landing-academia.png",
  },
  {
    title: "Calculadora",
    description: "Uma calculadora simples, feita em JavaScript puro, com layout moderno e funcionalidade completa.",
    link: "https://github.com/JonannVictor/calculadora",
    image: "/images/calculadora.png",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-zinc-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-12">
        Projetos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-2xl shadow-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 my-2">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Ver no GitHub <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
