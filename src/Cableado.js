import './App.css';
import Navbar from './Navbar';
import Footer from './footer';
import cableado from './assets/cableado1.jpg';
function Cableado() {
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
                  <img src={cableado} alt="Compromis" className="fila-img" style={{ maxWidth: '680px', maxHeight: '580px', borderRadius:'35px' }} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="texto">
          <h2 style={{ marginLeft: '45px' }}>Cableado estructurado</h2>
          <hr />
          <p className='p'>
          Nuestra especialidad radica en diseñar e implementar sistemas de cableado estructurado y fibra óptica. Estos no solo garantizan una conectividad confiable, sino también una base sólida para el crecimiento futuro de tu empresa. Imagina cada cable como un hilo que teje la red de posibilidades para tu éxito.
          </p>
          
        </div>
        </div>
        <br/><br/>
        <Footer />
      </>
    );
  }
  
  export default Cableado;