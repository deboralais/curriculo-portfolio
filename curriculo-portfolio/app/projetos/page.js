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
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Projetos Desenvolvidos</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Integração com GitHub</h2>
        {loading ? (
          <p>Carregando repositórios...</p>
        ) : (
          <ul className="space-y-4">
            {repos.slice(0, 5).map((repo) => (
              <li key={repo.id} className="p-4 bg-gray-100 rounded shadow">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold text-lg">
                  {repo.name}
                </a>
                <p className="text-sm text-gray-700">{repo.description || "Sem descrição."}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Link href="/" className="block mt-8 text-blue-600 underline">Voltar para Home</Link>
    </main>
  );
}
