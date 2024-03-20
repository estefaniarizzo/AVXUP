import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom'; 
function Servicios() {
   // Obtén la función de navegación
   const navigate = useNavigate();

   // Función para manejar el clic del botón y redirigir a otra página
   const handleButtonClick = () => {
     // Redirige a la página de Quienes Somos
     navigate('/servicios');
   };
  return (
    <>
     
      <div  className='servicios2'>
      
       
        <div className="video-container" style={{ display: 'inline-block' }}>
          <iframe
            width="400"
            height="315"
            src="https://www.youtube.com/embed/MP2vv0kw3Ys"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
       
        <br />
      </div>
        <div className="texto">
          <h2 style={{ marginLeft: '45px' }}>Servicios</h2>
          <hr />
          <p className='p'>
          AvxÜP Solutions SAS es una empresa de redes y telecomunicaciones que trabaja con materias de alta calidad garantizando la durabilidad y rendimiento, se realiza acompañamiento al cliente antes, durante y después de la implementación de nuestros servicios para garantizar una correcta implementación y funcionalidad de la solución adquirida de nuestra empresa.
          </p>
          {/* Utiliza la función handleButtonClick como manejador del evento onClick */}
          <button className='button' onClick={handleButtonClick} style={{ marginLeft: '45px' }}>Mas Informacion</button>
        </div>
      </div>
    
    </>
  );
}

export default Servicios;
