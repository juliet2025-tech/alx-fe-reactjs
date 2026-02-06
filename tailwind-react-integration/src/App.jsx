import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-4xl font-bold mb-6">
        Vite + React + Tailwind 🚀
      </h1>

      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-semibold transition"
      >
        Count is {count}
      </button>

      <p className="mt-6 text-slate-400">
        Edit <code className="text-indigo-400">src/App.jsx</code> and save
      </p>
    </div>
  )
}

export default App
