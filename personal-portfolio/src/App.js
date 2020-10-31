import React from 'react';
import './stylesheets/app.css';

import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <a href='https://app-kohl.now.sh/' target="_blank" rel="noopener noreferrer">Top 100 Cryptocurrencies App</a>
    </div>
  );
}

export default App;
