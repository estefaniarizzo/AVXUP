import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Logo from "./logo.jpg";

function Navbar() {
  return (
    <div>
      <navbar>
        <Link to="/">
          <img className="logotipo" src={Logo} alt="AVX UP Logo" />
        </Link>
        <h6 className='h5'>Redes y Tecnologías</h6>
        <ul>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto">Contactanos</Link>
          </li>
        </ul>
      </navbar>
    </div>
  );
}

export default Navbar;


