import './App.css';
import Navbar from './Navbar';
import Footer from './footer';
import compromise from './assets/compromiso.jpg';
function Confiabilidad() {
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
                  <img src={compromise} alt="Compromis" className="fila-img" style={{ maxWidth: '580px', maxHeight: '580px', borderRadius:'35px' }} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="texto">
          <h2 style={{ marginLeft: '45px' }}>Confiabilidad y Compromiso</h2>
          <hr />
          <p className='p'>
          Garantizamos soluciones seguras y efectivas, construyendo una base sólida de confianza con nuestros clientes
          </p>
          
        </div>
        </div>
        <br/><br/>
        <Footer />
      </>
    );
  }
  
  export default Confiabilidad;