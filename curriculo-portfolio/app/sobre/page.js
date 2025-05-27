"use client";
import Link from "next/link";

export default function Sobre() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900 px-6 py-20 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-10">Sobre este Projeto</h1>
        <p className="text-base text-neutral-700 leading-relaxed mb-8">
          Este portfólio foi desenvolvido com o objetivo de apresentar minhas experiências, habilidades e projetos de maneira clara, moderna e responsiva. Toda a interface foi inspirada em diretrizes profissionais de design minimalista, com foco em performance e acessibilidade.
        </p>

        <h2 className="text-2xl font-medium mb-6 text-left">Tecnologias Utilizadas</h2>
        <ul className="text-left space-y-3 text-neutral-800 mb-12">
          <li>🔹 <strong>Next.js:</strong> Framework para aplicações React com suporte a renderização híbrida.</li>
          <li>🔹 <strong>React:</strong> Biblioteca para criação de interfaces dinâmicas e reutilizáveis.</li>
          <li>🔹 <strong>TailwindCSS:</strong> Framework utilitário para estilização rápida e moderna.</li>
          <li>🔹 <strong>API do GitHub:</strong> Integração para exibir repositórios reais em tempo real.</li>
          <li>🔹 <strong>Hooks:</strong> <code>useState</code>, <code>useEffect</code> e <code>fetch</code> para gerenciamento de estado e requisições.</li>
          <li>🔹 <strong>Componentização:</strong> Organização modular para melhor manutenção e escalabilidade.</li>
        </ul>

        <Link href="/">
          <button className="text-sm text-black bg-white border border-neutral-300 rounded-full px-5 py-2 transition hover:bg-neutral-200">
             Voltar para Home
          </button>
        </Link>
      </div>
    </main>
  );
}