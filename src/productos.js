import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import compromiso from './assets/integracion2.jpg';
import innovacion from './assets/datacenter.jpg';
import cliente from './assets/racks.jpg';
import responsable from './assets/mantenimiento.jpg';
import Navbar from './Navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import './App.css';
function Productos (){
  // Obtén la función de navegación
  const navigate = useNavigate();

  // Función para manejar el clic del botón y redirigir a otra página
  const handleButtonClick = () => {
    // Redirige a la página de Quienes Somos
    navigate('/productos');
  };
    return (
        <>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <div  className='servicios2'>
          <div className="nosotros-container">
            <div className="mosaico">
              <div className="fila">
                <div className="imagen-container">
                <Link to="/integracionredes">
                  <img src={innovacion} alt="Innovacion" className="fila-img" style={{ maxWidth: '280px', maxHeight: '280px'}} />
                  <div className="overlay">
                    <span className="overlay-text">Integración de redes</span>
                  </div>
                  </Link>
                </div>
                
                <div className="imagen-container">
                <Link to="/cableadoestructurado">
                  <img src={compromiso} alt="Compromiso" className="fila-img" style={{ maxWidth: '280px', maxHeight: '290px' }} />
                  <div className="overlay">
                    <span className="overlay-text"> Cableado Estructurado y fibra óptica </span>
                  </div>
                  </Link>
                </div>
              </div>
              <br />
              <div className="fila">
                <div className="imagen-container">
                <Link to="/puntosdered">
                  <img src={responsable} alt="Responsable" className="fila-img" style={{ maxWidth: '330px', maxHeight: '180px' }} />
                  <div className="overlay">
                    <span className="overlay-text">Mantenimientos preventivos </span>
                  </div>
                  </Link>
                </div>
                <div className="imagen-container">
                <Link to="/datacenters">
                  <img src={cliente} alt="Cliente" className="fila-img" style={{ maxWidth: '280px', maxHeight: '300px' }} />
                  <div className="overlay">
                    <span className="overlay-text">Translado de Datacenter</span>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="texto">
              <h2 style={{ marginLeft: '45px' }}>Nuestros Servicios</h2>
              <hr />
              <p className='p'>
              Somos una empresa con personal altamente calificado con experiencia en telecomunicaciones, nuestro portafolio de servicios ofrece la instalación de cableado estructurado, Fibra Óptica, instalación de puntos de red certificados, integración de dispositivos de red como Switch, Routers, traslado de datacenter, Instalación y organización de rack, mantenimientos preventivos y correctivos, Soluciones de CCTV, Control de acceso, diseño y arquitectura de redes LAN, asesoramos para rediseñar su red LAN, consultoría para redes Informáticas.
              </p>
              <p className='p'>
                AvxÜP Solutions SAS. Es una empresa colombiana que ofrece soluciones integrales en el campo de las redes y las telecomunicaciones. Contamos con un equipo de profesionales altamente cualificados y con amplia experiencia en el sector, que se encargan de diseñar, instalar y mantener sistemas de cableado estructurado, fibra óptica, equipos de comunicaciones como switch, routers y otros dispositivos relacionados con las redes.
              </p>
              {/* Utiliza la función handleButtonClick como manejador del evento onClick */}
              
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <Footer/>
        </>
      );
}
export default Productos;