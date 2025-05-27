"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Projetos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/deboralais/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900 px-6 py-20 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-12 text-center">Projetos Desenvolvidos</h1>

        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-6 text-left">Repositórios no GitHub</h2>
          <p className="text-base text-neutral-700 leading-relaxed text-justify mb-8">
            Abaixo estão listados alguns dos meus projetos públicos disponíveis no GitHub. Estes repositórios refletem minha experiência prática com desenvolvimento front-end, integração de APIs e boas práticas de escrita de código limpo e reutilizável.
          </p>

          {loading ? (
            <p className="text-center"> Carregando repositórios...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {repos.slice(0, 6).map((repo) => (
                <div key={repo.id} className="p-5 bg-white rounded-xl shadow hover:shadow-md transition">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-blue-700 hover:underline"
                  >
                    {repo.name}
                  </a>
                  <p className="text-sm text-neutral-700 mt-2 text-justify">
                    {repo.description ? repo.description : "Desenvolvido na gradução"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="text-center">
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