import ProjectCard from './ProjectCard';

const projetos = [
  {
    nome: 'Landing Page Academia',
    desc: 'Landing page feita para o Instituto Ev usando HTML, CSS e JS.',
    link: 'https://github.com/JonannVictor/Projeto-Cliente_InstitutoEv'
  },
  {
    nome: 'Calculadora JS',
    desc: 'Projeto de calculadora simples utilizando JavaScript.',
    link: 'https://github.com/JonannVictor/calculadora'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Meus Projetos</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projetos.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
