import './App.css';
import Navbar from './Navbar';
import Footer from './footer';
import puntored from './assets/puntosred.jpg';
const Puntosred =() =>{
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
                  <img src={puntored} alt="Intregracionredes" className="fila-img" style={{ maxWidth: '580px', maxHeight: '580px', borderRadius:'35px' }} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="texto">
          <h2 style={{ marginLeft: '45px' }}>Puntos de red</h2>
          <hr />
          <p className='p'>
          No se trata solo de conectar cables. Creamos puntos de acceso estratégicos que cumplen con rigurosos estándares de certificación. La señal fluye sin interrupciones, desde la sala de juntas hasta el rincón más alejado. Tu empresa está respaldada por una infraestructura robusta.
          </p>
          
        </div>
        </div>
        <br/><br/>
        <Footer />
      </section>
    
  }
  
  export default Puntosred;
  