"use client";
import Link from "next/link";

export default function Profissional() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900 px-6 py-20 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold mb-12 text-center">Experiência Profissional</h1>

        <div className="space-y-12 divide-y divide-neutral-300">
          <section className="pt-0">
            <h2 className="text-xl font-semibold text-neutral-800 mb-1">Analista de Customer Success</h2>
            <p className="text-sm text-neutral-600 mb-2">Recrut.AI — <span className="italic">Jan 2024 até o momento</span></p>
            <p className="text-base text-neutral-700 leading-relaxed text-justify">
              Atuo na área de Customer Success, oferecendo suporte técnico e estratégico para clientes em uma plataforma digital de recrutamento e seleção. Minhas principais atividades envolvem o atendimento humanizado por e-mail e WhatsApp, resolução de dúvidas sobre usabilidade, identificação e encaminhamento de bugs, além da coleta e repasse de feedbacks ao time de produto. Também acompanho o desempenho da plataforma com foco na satisfação e retenção de clientes, propondo melhorias com base em dados e experiências de uso. Minha formação em Sistemas para Internet contribui diretamente para minha atuação, pois me proporciona compreensão técnica sobre sistemas web, usabilidade e fluxos digitais, o que facilita a comunicação entre as áreas técnicas e os usuários, além de auxiliar na análise de problemas e sugestões de otimização da plataforma.
            </p>
          </section>

          <section className="pt-12">
            <h2 className="text-xl font-semibold text-neutral-800 mb-1">Para o futuro</h2>
            <p className="text-sm text-neutral-600 mb-2">Faço planos de atuar no desenvolvimento de Inteligência Artificial </p>
            <p className="text-base text-neutral-700 leading-relaxed text-justify">
              Ser mulher na área de inteligência artificial é uma oportunidade de contribuir para uma tecnologia mais ética, inclusiva e sensível às diversidades. Tenho grande interesse em temas como Processamento de Linguagem Natural, modelos de linguagem e o treinamento de IAs, sempre com foco na humanização. Acredito que o desenvolvimento dessas tecnologias deve estar alinhado a princípios éticos e à regulamentação responsável, garantindo que a IA seja usada de forma consciente e voltada para o bem-estar coletivo.
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