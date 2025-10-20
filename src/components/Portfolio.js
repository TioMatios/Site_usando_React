import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css'; // Importa os estilos do portfólio

function Portfolio() {
  // 1. Criar uma referência para o container de scroll
  const scrollContainerRef = useRef(null);

  // 2. Usar useEffect para adicionar o event listener (equivale ao seu js.js)
  useEffect(() => {
    // Pega o elemento do DOM através da referência
    const container = scrollContainerRef.current;
    
    // Se o container não existir, não faz nada
    if (!container) return;

    // A função que lida com o evento de 'wheel' (roda do mouse)
    const handleWheel = (event) => {
      event.preventDefault(); // Impede o scroll vertical da página
      container.scrollLeft += event.deltaY; // Adiciona o scroll horizontal
    };

    // Adiciona o event listener
    container.addEventListener('wheel', handleWheel, { passive: false });

    // 3. Função de limpeza: remove o event listener quando o componente "desmontar"
    // Isso é crucial para evitar memory leaks
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []); // O array vazio [] garante que este efeito rode apenas uma vez (ao montar)

  // Lista de imagens (assumindo que estão em /public/)
  const images = [
    { src: "/Portfolio/img1.jpg", alt: "Foto 1" },
    { src: "/Portfolio/img2.jpg", alt: "Foto 2" },
    { src: "/Portfolio/img3.jpg", alt: "Foto 3" },
    { src: "/Portfolio/img4.jpg", alt: "Foto 4" },
    { src: "/Portfolio/img5.jpg", alt: "Foto 5" },
    { src: "/Portfolio/img6.jpg", alt: "Foto 6" },
    { src: "/Portfolio/img7.jpg", alt: "Foto 7" },
    { src: "/Portfolio/img8.jpg", alt: "Foto 8" },
    { src: "/Portfolio/img9.jpg", alt: "Foto 9" },
    { src: "/Portfolio/img10.jpg", alt: "Foto 10" },
    { src: "/Portfolio/img11.jpg", alt: "Foto 11" },
    { src: "/Portfolio/img12.jpg", alt: "Foto 12" },
    { src: "/Portfolio/img13.jpg", alt: "Foto 13" },
    { src: "/Portfolio/img14.jpg", alt: "Foto 14" },
    { src: "/Portfolio/img15.jpg", alt: "Foto 15" },
  ];

  return (
    // Usamos React.Fragment (<> ... </>) pois o body não deve ser renderizado aqui
    <> 
      <nav className="navbar">
        <Link to="/">HOME</Link>
        <span>PORTFOLIO</span>
        <Link to="/watch">WATCH</Link>
      </nav>

      {/* 4. Atribuir a referência (ref) ao elemento do DOM */}
      <div className="horizontal-scroll" ref={scrollContainerRef}>
        <div className="image-row">
          {/* Mapeamos a lista de imagens para criar os elementos <img> */}
          {images.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>

      <div className="footer-left">
        <a href="#">SING-IN</a>
      </div>

      <div className="footer-right">
        <a href="#">TERMS AND CONDITIONS</a>
        <a href="#">PRIVACY POLICY</a>
      </div>
    </>
  );
}

export default Portfolio;