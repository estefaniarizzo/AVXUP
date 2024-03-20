import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Quienessomos from './Quienes Somos';
import Innovacion from './innovacion';
import Confiabilidad from './compromiso';
import Equipo from './trabajo equipo';
import Cliente from './servicio cliente';
import Productos from './productos';
import Contacto from './contacto';
// Importa el componente de otra página si tienes uno
// import OtraPagina from './OtraPagina';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Quienessomos />} />
        <Route path="/innovacion" element={<Innovacion/>} />
        <Route path="/confiabilidad" element={<Confiabilidad/>} />
        <Route path="/equipo" element={<Equipo/>} />
        <Route path="/cliente" element={<Cliente/>} />
        <Route path="/servicios" element={<Productos/>} />
        <Route path="/contacto" element={<Contacto/>} />
        {/* Agrega más rutas aquí si es necesario */}
        {/* Por ejemplo: */}
        {/* <Route path="/otra-pagina" element={<OtraPagina />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

