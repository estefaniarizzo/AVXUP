import './App.css';
import Navbar from './Navbar';
import Footer from './footer';
import innova from './assets/innovar.jpg';
function Innovacion() {
    return (
      <>
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
                  <img src={innova} alt="Innovacion" className="fila-img" style={{ maxWidth: '580px', maxHeight: '580px', borderRadius:'35px' }} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="texto">
          <h2 style={{ marginLeft: '45px' }}>Innovacion y Calidad</h2>
          <hr />
          <p className='p'>
          Estamos en constante búsqueda de avances tecnológicos para mejorar nuestras ofertas y procesos.
          </p>
          
        </div>
        </div>
        <br/><br/>
        <Footer />
      </>
    );
  }
  
  export default Innovacion;
  