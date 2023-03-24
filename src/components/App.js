import React from 'react';
import './App.css';
import MiApi from './MiApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty Characters</h1>
      </header>
      <main>
        <MiApi />
      </main>
    </div>
  );
}

export default App;
