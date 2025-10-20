import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importa os estilos

// Assumindo que as imagens estão na pasta /public
// Seus caminhos originais: "Imagens/home/instagram.webp"
// Em React (com /public): "/Imagens/home/instagram.webp"

function Home() {
  return (
    <div className="body-home"> {/* Usamos "className" em vez de "class" */}

      <div className="contador-3">
        {/* Links externos usam <a> normal */}
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/leonardollauxen/?hl=pt-br">
          <img src="/Imagens/home/instagram.webp" alt="" className="img" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="">
          <img src="/Imagens/home/tiktok.avif" alt="" className="img" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="">
          <img src="/Imagens/home/youtube.avif" alt="" className="img" />
        </a>
      </div>

      <div className="contador-2">
        <h1 className="h1">OUTSIDE <br />SESSIONS</h1> {/* <br> vira <br /> */}
        <p className="p">out now</p>
      </div>

      <div className="contador">
        {/* Links internos usam <Link> do react-router-dom */}
        <Link to="/portfolio" className="button-1">POTIFOLIO</Link>
        <Link to="/watch" className="button-2">WATCH</Link>
      </div>
    </div>
  );
}

export default Home;