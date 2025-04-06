import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-100 pt-28 px-4 pb-16">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Projetos
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {/* Projeto: Landing Page */}
          <motion.div
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Landing Page - InstitutoEv
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Página institucional desenvolvida com foco em performance e design moderno.
              </p>
              <a
                href="https://github.com/JonannVictor/Projeto-Cliente_InstitutoEv"
                className="text-blue-600 hover:underline mt-auto"
                target="_blank"
              >
                Ver no GitHub →
              </a>
            </div>
          </motion.div>

          {/* Projeto: Calculadora */}
          <motion.div
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Calculadora
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Uma calculadora simples e funcional feita com JavaScript puro.
              </p>
              <a
                href="https://github.com/JonannVictor/Calculadora"
                className="text-blue-600 hover:underline mt-auto"
                target="_blank"
              >
                Ver no GitHub →
              </a>
            </div>
          </motion.div>

          
        </div>
      </motion.div>
    </section>
  );
}
