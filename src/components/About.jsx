import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-zinc-900 mb-6">
          Contato
        </h2>
        <p className="text-zinc-700 text-lg mb-8">
          Vamos conversar? Você pode me encontrar nesses canais:
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:jonannvictor@gmail.com"
            className="text-zinc-700 hover:text-blue-600 transition"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/jonannvictor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/JonannVictor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 hover:text-blue-600 transition"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;