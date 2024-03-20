import './App.css';
import Navbar from './Navbar';
import Footer from './footer';

import servicio from './assets/servicio.jpg';
function Cliente() {
    return (
      <>
        <Navbar />
        <br />
        <br />
        <br />
        <br/>
          <br/>
        <div  className='servicios2'>
          <div className="nosotros-container">
            <div className="mosaico">
              <div className="fila">
                
                <div className="imagen-container">
                  <img src={servicio} alt="Responsables" className="fila-img" style={{ maxWidth: '520px', maxHeight: '380px', borderRadius:'35px' }} />
                </div>
                
              </div>
              
            </div>
            
          </div>
        
          <div className="texto">
          <h2 style={{ marginLeft: '45px' }}>Servicio al cliente</h2>
          <hr />
          <p className='p'>
          Priorizamos las necesidades de nuestros clientes, proporcionando atención detallada y personalizada.
          </p>
          
        </div>
        </div>
        <br/><br/>
        <Footer />
      </>
    );
  }
  
  export default Cliente;