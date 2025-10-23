// src/App.jsx
import React from 'react';
import RecipesViewPage from './pages/RecipesViewPage';
import './index.css'; // o il nome corretto del file

function App() {
  return (
    <div>
      <h1
  className="text-8xl text-center font-bold"
  style={{
    color: 'var(--color-title)',
    fontFamily: 'CreamCakeBold'
  }}
>
  Ricette
</h1>

      <RecipesViewPage />
    </div>
  );
}

export default App;