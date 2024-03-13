import { useState, useEffect } from 'react';
import alied from './assets/alied.jpg';
import legrant from './assets/legrant.jpg';
import siemon from './assets/siemon.jpg';
import pandui from './assets/pandui.jpg';
import cisco from './assets/cisco.png';
import alcatel from './assets/alcatel.png';

import './App.css';
function Slider() {
  const images = [alied, legrant, siemon, pandui, cisco, alcatel]; // Lista de imágenes para el slider
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [images.length]);

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div key={index} className={index === currentIndex ? 'slide active' : 'slide'}>
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
