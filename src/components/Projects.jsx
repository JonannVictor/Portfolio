import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-100 pt-24 px-4">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Projetos</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Projeto: Landing page da academia */}
          <motion.div
            className="bg-white rounded-2xl shadow-md overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://raw.githubusercontent.com/JonannVictor/Projeto-Cliente_InstitutoEv/main/src/assets/banner.png"
              alt="Landing page academia"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Landing Page - InstitutoEv</h3>
              <p className="text-gray-600 mb-3">
                Página institucional desenvolvida com foco em performance e design moderno.
              </p>
              <a
                href="https://github.com/JonannVictor/Projeto-Cliente_InstitutoEv"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                Ver no GitHub →
              </a>
            </div>
          </motion.div>

          {/* Projeto: Calculadora */}
          <motion.div
            className="bg-white rounded-2xl shadow-md overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Calculadora</h3>
              <p className="text-gray-600 mb-3">
                Uma calculadora simples e funcional feita com JavaScript puro.
              </p>
              <a
                href="https://github.com/JonannVictor/Calculadora"
                className="text-blue-600 hover:underline"
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
