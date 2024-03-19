import { useState, useEffect } from 'react';
import tecno from "./assets/tecno.jpg";
import red from "./assets/red.jpg";
import social from "./assets/social.jpg";
import './App.css';
function Carrusel() {
  const images = [tecno, red, social];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [images.length]);

  return (
    <div className="carrusel-container"> {/* Contenedor adicional */}
      <div className="carrusel"> {/* Carrusel */}
        <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
      </div>
    </div>
  );
}
export default Carrusel;
