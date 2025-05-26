"use client";
import Link from "next/link";

export default function Academico() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900 px-6 py-12 md:px-20 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold tracking-tight text-center mb-12 text-neutral-900">
          Formação Acadêmica
        </h1>

        <div className="space-y-10 divide-y divide-neutral-300">
          <section className="pt-0">
            <h2 className="text-xl font-semibold mb-1 text-neutral-800">Tecnólogo em Sistemas para Internet</h2>
            <p className="text-sm text-neutral-600 mb-2">Universidade Católica de Pernambuco — <span className="italic">2023 a 2025</span></p>
            <p className="text-base leading-relaxed text-neutral-700">
              Ênfase em engenharia de software, estruturas de dados, arquitetura moderna e aplicações distribuídas com foco em escalabilidade.
            </p>
          </section>

          <section className="pt-10">
            <h2 className="text-xl font-semibold mb-1 text-neutral-800">Curso Profissionalizante em Front-End</h2>
            <p className="text-sm text-neutral-600 mb-2">Escola Técnica SENAI de Ipojuca — <span className="italic">2023</span></p>
            <p className="text-base leading-relaxed text-neutral-700">
              Capacitação prática em HTML, CSS, TypeScript, Angular e ferramentas modernas de desenvolvimento web responsivo.
            </p>
          </section>

          <section className="pt-10">
            <h2 className="text-xl font-semibold mb-1 text-neutral-800">Certificações em Ética em IA</h2>
            <p className="text-sm text-neutral-600 mb-2">ENAP — <span className="italic">2025</span></p>
            <p className="text-base leading-relaxed text-neutral-700">
              Fundamentos de Inteligência Artificial aplicada com ética, foco em inclusão, diversidade, e responsabilidade social na tecnologia.
            </p>
          </section>
        </div>

        <div className="mt-16 text-center">
          <Link href="/">
            <button className="text-sm text-black bg-white border border-neutral-300 rounded-full px-5 py-2 transition hover:bg-neutral-200">
               Voltar para Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
