import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Watch from './components/Watch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/watch" element={<Watch />} />
    </Routes>
  );
}

export default App;