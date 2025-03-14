import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Мій перший Vite + React проєкт.</h1>
      </header>
      <main>
        <div className="logos">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className="card">
          <h2>Лічильник: {count}</h2>
          <button onClick={() => setCount(count + 1)}>➕ Додати</button>
          <button onClick={() => setCount(count - 1)}>➖ Відняти</button>
          <button onClick={() => setCount(0)}>🔄 Скинути</button>
        </div>
      </main>
      <footer>
        <p>Навчаюсь React та TypeScript з Vite!</p>
      </footer>
    </div>
  );
}

export default App;