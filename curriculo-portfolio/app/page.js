// app/page.js
"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-neutral-100 text-neutral-900 px-6 py-20 font-sans">
      <div className="max-w-3xl text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/debra.jpeg" 
            alt="Foto do usuário"
            width={128}
            height={128}
            className="rounded-full border-4 border-black"
          />
        </div>
        <h1 className="text-5xl font-semibold mb-6">Bem-vindo ao meu Portfólio</h1>
        <p className="text-base text-neutral-700 mb-10 leading-relaxed">
          Explore meu trabalho, formações e experiências abaixo. Este site foi criado com foco em acessibilidade, responsividade e clareza — inspirado em princípios de design profissional e minimalista.
        </p>
        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <Link href="/sobre">
            <button className="w-64 text-sm text-black bg-white border border-neutral-300 rounded-full px-5 py-2 transition hover:bg-neutral-200">
              Sobre o Projeto
            </button>
          </Link>
          <Link href="/academico">
            <button className="w-64 text-sm text-black bg-white border border-neutral-300 rounded-full px-5 py-2 transition hover:bg-neutral-200">
              Experiência Acadêmica
            </button>
          </Link>
          <Link href="/profissional">
            <button className="w-64 text-sm text-black bg-white border border-neutral-300 rounded-full px-5 py-2 transition hover:bg-neutral-200">
              Experiência Profissional
            </button>
          </Link>
          <Link href="/projetos">
            <button className="w-64 text-sm text-black bg-white border border-neutral-300 rounded-full px-5 py-2 transition hover:bg-neutral-200">
              Projetos Desenvolvidos
            </button>
          </Link>
          <Link href="/jogo">
            <button className="w-64 text-sm text-black bg-white border border-neutral-300 rounded-full px-5 py-2 transition hover:bg-neutral-200">
              Jogo da Senha
            </button>
          </Link>
        </nav>
      </div>
    </main>
  );
}
