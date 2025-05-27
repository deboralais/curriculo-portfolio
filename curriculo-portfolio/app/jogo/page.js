"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

function generateSecret() {
  const digits = new Set();
  while (digits.size < 4) {
    digits.add(Math.floor(Math.random() * 10).toString());
  }
  return Array.from(digits).join("");
}

function getFeedback(guess, secret) {
  let bulls = 0, cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) bulls++;
    else if (secret.includes(guess[i])) cows++;
  }
  return { bulls, cows };
}

export default function Jogo() {
  const [secret, setSecret] = useState("");
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setSecret(generateSecret());
  }, []);

  const handleGuess = () => {
    if (guess.length !== 4 || new Set(guess).size !== 4) return alert("Digite 4 dígitos únicos.");
    const feedback = getFeedback(guess, secret);
    const updatedGuesses = [{ guess, ...feedback }, ...guesses];
    setGuesses(updatedGuesses);
    setGuess("");
    if (feedback.bulls === 4 || updatedGuesses.length >= 10) {
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    setSecret(generateSecret());
    setGuesses([]);
    setGuess("");
    setGameOver(false);
  };

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900 px-6 py-20 font-sans">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-neutral-800">🎮 Jogo da Senha</h1>
        <p className="text-base text-neutral-700 leading-relaxed text-justify mb-10">
          Descubra a sequência secreta de <strong>4 dígitos únicos</strong>. A cada palpite, você receberá dicas com os ícones:
          <span className="inline-block mx-1">🐂</span> (posição e número corretos) e
          <span className="inline-block mx-1">🐄</span> (número certo na posição errada).<br />
          Você tem até <strong>10 tentativas</strong> para desvendar o código!
        </p>

        <div className="mb-8 flex flex-col sm:flex-row justify-center gap-4">
          <input
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="border border-neutral-300 rounded-full px-4 py-2 text-center text-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-400"
            placeholder="Digite 4 dígitos únicos"
            maxLength={4}
            disabled={gameOver}
          />
          <button
            onClick={handleGuess}
            disabled={gameOver}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-neutral-800 transition"
          >
            Tentar
          </button>
          <button
            onClick={() => alert(`Senha: ${secret}`)}
            className="bg-white border border-neutral-400 text-neutral-700 px-6 py-2 rounded-full hover:bg-neutral-200 transition"
          >
            Mostrar Senha
          </button>
        </div>

        <div className="space-y-2 mb-10">
          {guesses.map((g, i) => (
            <div key={i} className="bg-white p-3 rounded-lg shadow flex justify-between items-center text-left">
              <span className="font-mono text-lg text-neutral-800">{g.guess}</span>
              <span className="text-sm text-neutral-600">🐂 {g.bulls} | 🐄 {g.cows}</span>
            </div>
          ))}
        </div>

        {gameOver && (
          <div className="mb-10">
            <p className="text-lg font-semibold text-neutral-800">
              {guesses[0].bulls === 4
                ? "🎉 Parabéns! Você desvendou a senha secreta."
                : "☹️ Fim de jogo. Suas 10 tentativas se esgotaram."}
            </p>
            <button
              onClick={handleRestart}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Novo Jogo
            </button>
          </div>
        )}

        <Link href="/">
          <button className="text-sm text-black bg-white border border-neutral-300 rounded-full px-5 py-2 transition hover:bg-neutral-200">
             Voltar para Home
          </button>
        </Link>
      </div>
    </main>
  );
}
