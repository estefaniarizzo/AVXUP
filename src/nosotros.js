import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de react-router-dom
import compromiso from './assets/compromiso.jpg';
import innovacion from './assets/innovar.jpg';
import cliente from './assets/cliente.jpg';
import responsable from './assets/responsabilidad.jpg';
import { Link } from 'react-router-dom';
import './App.css';

function Nosotros() {
  // Obtén la función de navegación
  const navigate = useNavigate();

  // Función para manejar el clic del botón y redirigir a otra página
  const handleButtonClick = () => {
    // Redirige a la página de Quienes Somos
    navigate('/nosotros');
  };

  return (
    <div id="quienes-somos" className='servicios2'>
      <div className="nosotros-container">
        <div className="mosaico">
          <div className="fila">
            <div className="imagen-container">
            <Link to="/innovacion">
              <img src={innovacion} alt="Innovacion" className="fila-img" style={{ maxWidth: '280px', maxHeight: '280px' }} />
              <div className="overlay">
                <span className="overlay-text">Innovación</span>
              </div>
              </Link>
            </div>
            
            <div className="imagen-container">
              <Link to="/confiabilidad">
              <img src={compromiso} alt="Compromiso" className="fila-img" style={{ maxWidth: '300px', maxHeight: '280px' }} />
              <div className="overlay">
                <span className="overlay-text">Confiabilidad</span>
              </div>
              </Link>
            </div>
          </div>
          <br />
          <div className="fila">
            <div className="imagen-container">
            <Link to="/equipo">
              <img src={responsable} alt="Responsable" className="fila-img" style={{ maxWidth: '290px', maxHeight: '175px' }} />
              <div className="overlay">
                <span className="overlay-text">Trabajo en equipó</span>
              </div>
              </Link>
            </div>
            <div className="imagen-container">
            <Link to="/cliente">
              <img src={cliente} alt="Cliente" className="fila-img" style={{ maxWidth: '300px', maxHeight: '300px' }} />
              <div className="overlay">
                <span className="overlay-text">Servicio al Cliente</span>
              </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="texto">
          <h2 style={{ marginLeft: '45px' }}>Nosotros</h2>
          <hr />
          <p className='p'>
            AvxÜP Solutions SAS. Es una empresa colombiana que ofrece soluciones integrales en el campo de las redes y las telecomunicaciones. Contamos con un equipo de profesionales altamente cualificados y con amplia experiencia en el sector, que se encargan de diseñar, instalar y mantener sistemas de cableado estructurado, fibra óptica, equipos de comunicaciones como switch, routers y otros dispositivos relacionados con las redes.
          </p>
          {/* Utiliza la función handleButtonClick como manejador del evento onClick */}
          <button className='button' onClick={handleButtonClick} style={{ marginLeft: '45px' }}>Mas Informacion</button>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
