import React from 'react'
import { Card, CardContent } from './components/ui/card'
import { Button } from './components/ui/button'
import { ModeToggle } from './components/ModeToggle'

const App = () => {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground transition-colors">
      <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Meu Portfólio</div>
        <div className="flex items-center space-x-4">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">Sobre Mim</a>
          <a href="#projects" className="hover:text-blue-400">Projetos</a>
          <a href="#contact" className="hover:text-blue-400">Contato</a>
          <ModeToggle />
        </div>
      </nav>

      <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <h1 className="text-5xl font-bold mb-4">Bem-vindo ao Meu Portfólio</h1>
        <p className="text-xl">Desenvolvedor Front-End criando experiências incríveis na web.</p>
      </section>

      <section id="about" className="p-8 bg-white dark:bg-gray-900 dark:text-white">
        <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
        <p className="text-lg">Sou um dev Front-End apaixonado por React e Tailwind CSS.</p>
      </section>

      <section id="projects" className="p-8 bg-gray-100 dark:bg-gray-800 dark:text-white">
        <h2 className="text-4xl font-bold mb-8">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((project) => (
            <Card key={project} className="bg-white dark:bg-gray-700 text-black dark:text-white shadow-md rounded-2xl">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">Projeto {project}</h3>
                <p className="mb-4">Descrição do projeto {project}.</p>
                <Button>Ver Projeto</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="p-8 bg-white dark:bg-gray-900 dark:text-white">
        <h2 className="text-4xl font-bold mb-4">Contato</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Nome" className="border p-2 rounded w-full bg-white dark:bg-gray-800 dark:text-white" />
          <input type="email" placeholder="Email" className="border p-2 rounded w-full bg-white dark:bg-gray-800 dark:text-white" />
          <textarea placeholder="Mensagem" className="border p-2 rounded w-full bg-white dark:bg-gray-800 dark:text-white" />
          <Button>Enviar</Button>
        </form>
      </section>
    </div>
  )
}

export default App
