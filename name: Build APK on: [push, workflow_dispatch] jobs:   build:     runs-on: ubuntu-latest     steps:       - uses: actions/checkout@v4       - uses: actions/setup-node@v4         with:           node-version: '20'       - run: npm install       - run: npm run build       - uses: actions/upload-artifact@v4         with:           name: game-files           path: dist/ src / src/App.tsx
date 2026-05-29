import { useState } from 'react';

export default function App() {
  const [game, setGame] = useState<'menu' | 'maze' | 'gem' | 'runner'>('menu');
  const [score, setScore] = useState(0);

  if (game === 'maze') return (
    <div className="min-h-screen bg-gray-900 p-4 text-center">
      <button onClick={() => setGame('menu')} className="mb-4 px-4 py-2 bg-white/10 text-white rounded">Back</button>
      <h2 className="text-3xl font-bold text-pink-400 mb-4">NEON MAZE</h2>
      <p className="text-yellow-400 text-xl mb-4">Score: {score}</p>
      <button onClick={() => setScore(s => s + 10)} className="px-8 py-4 bg-pink-500 text-white font-bold rounded-xl">Collect Coin</button>
    </div>
  );

  if (game === 'gem') return (
    <div className="min-h-screen bg-indigo-950 p-4 text-center">
      <button onClick={() => setGame('menu')} className="mb-4 px-4 py-2 bg-white/10 text-white rounded">Back</button>
      <h2 className="text-3xl font-bold text-purple-400 mb-4">GEM CRUSH</h2>
      <p className="text-yellow-400 text-xl mb-4">Score: {score}</p>
      <button onClick={() => setScore(s => s + 50)} className="px-8 py-4 bg-purple-500 text-white font-bold rounded-xl">Match Gems</button>
    </div>
  );

  if (game === 'runner') return (
    <div className="min-h-screen bg-gray-950 p-4 text-center">
      <button onClick={() => setGame('menu')} className="mb-4 px-4 py-2 bg-white/10 text-white rounded">Back</button>
      <h2 className="text-3xl font-bold text-cyan-400 mb-4">NEON RUNNER</h2>
      <p className="text-yellow-400 text-xl mb-4">Score: {score}</p>
      <button onClick={() => setScore(s => s + 10)} className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl">JUMP</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4">
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold mb-2 text-pink-500">TAPSTORM</h1>
        <p className="text-gray-400">3 Games Free Offline</p>
      </div>
      <div className="max-w-md mx-auto space-y-4">
        <button onClick={() => { setGame('maze'); setScore(0); }} className="w-full p-6 bg-gray-800 rounded-2xl border border-pink-500 text-left">
          <h3 className="text-xl font-bold text-pink-400">Neon Maze</h3>
          <p className="text-gray-400 text-sm">Navigate and collect!</p>
        </button>
        <button onClick={() => { setGame('gem'); setScore(0); }} className="w-full p-6 bg-gray-800 rounded-2xl border border-purple-500 text-left">
          <h3 className="text-xl font-bold text-purple-400">Gem Crush</h3>
          <p className="text-gray-400 text-sm">Match 3 and score!</p>
        </button>
        <button onClick={() => { setGame('runner'); setScore(0); }} className="w-full p-6 bg-gray-800 rounded-2xl border border-cyan-500 text-left">
          <h3 className="text-xl font-bold text-cyan-400">Neon Runner</h3>
          <p className="text-gray-400 text-sm">Run and jump!</p>
        </button>
      </div>
    </div>
  );
}
