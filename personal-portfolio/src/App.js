import React from 'react'
import './stylesheets/app.css'

import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <Projects />
    </div>
  );
}

export default App
