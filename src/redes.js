import './App.css';
import Navbar from './Navbar';
import Footer from './footer';
import integrared from './assets/integracion2.jpg';
const Redes =() =>{
    return <section>
      
        <Navbar />
        <br />
        <br />
        <br />
        <br/>
          <br/>
        <div className='servicios2'>
          <div className="nosotros-container">
            <div className="mosaico">
              <div className="fila">
                <div className="imagen-container">
                  <img src={integrared} alt="Intregracionredes" className="fila-img" style={{ maxWidth: '580px', maxHeight: '580px', borderRadius:'35px' }} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="texto">
          <h2 style={{ marginLeft: '45px' }}>Integración de Dispositivos de Red</h2>
          <hr />
          <p className='p'>
          Estamos en constante búsqueda de avances tecnológicos para mejorar nuestras ofertas y procesos.
          </p>
          
        </div>
        </div>
        <br/><br/>
        <Footer />
      </section>
    
  }
  
  export default Redes;
  