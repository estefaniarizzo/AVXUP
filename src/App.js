import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
// Importa el componente de otra página si tienes uno
// import OtraPagina from './OtraPagina';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Agrega más rutas aquí si es necesario */}
        {/* Por ejemplo: */}
        {/* <Route path="/otra-pagina" element={<OtraPagina />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

