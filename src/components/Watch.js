import React from 'react';
import { Link } from 'react-router-dom';

function Watch() {
  return (
    <div style={{ padding: '50px', color: 'white', backgroundColor: '#2e2e2e', minHeight: '100vh', fontFamily: 'raleway' }}>
      <h1>Página "Watch"</h1>
      <p>Esta página está em construção.</p>
      <Link to="/" style={{ color: '#D4C1A3' }}>Voltar para Home</Link>
    </div>
  );
}

export default Watch;