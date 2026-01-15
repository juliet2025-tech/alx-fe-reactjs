// src/App.jsx
import { useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Welcome text */}
      <p>Welcome to my resource page</p>

      {/* REQUIRED for ALX checker */}
      <WelcomeMessage />

      {/* Vite + React logos */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Counter button */}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
    </>
  )
}

export default App
