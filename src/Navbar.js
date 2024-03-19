import React from 'react';
import './App.css'; // Importar el archivo CSS general
import Logo from "./logo.jpg";

function Navbar() {
  return (
    <div>
    <navbar>
      <img src={Logo} alt="AVX UP Logo" /> <h6 className='h5'>Redes y Tecnologías</h6>
      <ul>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#quienes-somos">Quienes somos</a></li>
        <li><a href="#contacto">Contactanos</a></li>
      </ul>
    </navbar></div>
  );
}

export default Navbar;

