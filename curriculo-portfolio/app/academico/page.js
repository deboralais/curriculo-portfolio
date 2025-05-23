"use client";
import Link from "next/link";

export default function Academico() {
  return (
    <main className="min-h-screen p-8 bg-gray-100 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Experiência Acadêmica</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">Tecnológo em Sistemas para Internat</h2>
          <p className="text-md text-gray-700">Universidade Ctólica de Pernambuco — 2023 a 2025</p>
          <p className="mt-2">Foco em desenvolvimento de software, algoritmos, estruturas de dados e sistemas distribuídos.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Curso de Extensão em UX/UI Design</h2>
          <p className="text-md text-gray-700">Instituto ABC — 2021</p>
          <p className="mt-2">Exploração de boas práticas em design centrado no usuário, wireframes, prototipagem e testes de usabilidade.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Certificações em Tecnologias Web</h2>
          <p className="text-md text-gray-700">Plataformas online — Coursera, Alura, Udemy</p>
          <p className="mt-2">React, Next.js, TailwindCSS, TypeScript, Node.js, entre outras tecnologias modernas para desenvolvimento web.</p>
        </section>
      </div>
      <Link href="/" className="block mt-8 text-blue-600 underline">Voltar para Home</Link>
    </main>
  );
}