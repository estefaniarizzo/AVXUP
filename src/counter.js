import React from 'react';
import  { useState, useEffect } from 'react';
import './App.css';
function Counter() {
    const [clientes, setClientes] = useState(1);

    const [servicios, setServicios] = useState(1);
  
  
    useEffect(() => {
      const clientesInterval = setInterval(() => {
        setClientes((clientes) => (clientes < 10 ? clientes + 1 : 10));
      }, 1000);
  
  
  
      const serviciosInterval = setInterval(() => {
        setServicios((servicios) => (servicios < 20 ? servicios + 1 : 20));
      }, 1000);
  
      return () => {
        clearInterval(clientesInterval);
  
        clearInterval(serviciosInterval);
      };
    }, []);
  return (
    <div class="section-counter paralax-mf bg-image">
      <div class="overlay-mf"></div>
      <div class="container position-relative" style={{ margin: '5px' }}>
        <div class="row">
          <div class="col-sm-4 col-lg-4">
            <div class="counter-box counter-box pt-4 pt-md-0">
              <div class="counter-ico">
                <span class="ico-circle"><i class="bi bi-person"></i></span>
              </div>
              <div class="counter-num">
                <p class="counter">{clientes}</p>
                <span class="counter-text" style={{ fontSize: '15px' }}>CLIENTES</span>
              </div>
            </div>
          </div>
          <div class="col-sm-4 col-lg-4">
            <div class="counter-box pt-4 pt-md-0">
              <div class="counter-ico">
                <span class="ico-circle"><i class="bi bi-tools"></i></span>
              </div>
              <div class="counter-num">
                <p class="counter">{servicios}</p>
                <span class="counter-text" style={{ fontSize: '15px' }}>SERVICIOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
