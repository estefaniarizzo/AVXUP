import './App.css';
import Navbar from './Navbar';
import Footer from './footer';
import responsables from './assets/responsabilidad.jpg';
function Equipo() {
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
                  <img src={responsables} alt="Responsables" className="fila-img" style={{ maxWidth: '580px', maxHeight: '580px', borderRadius:'35px' }} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="texto">
          <h2 style={{ marginLeft: '45px' }}>Trabajo en Equipo</h2>
          <hr />
          <p className='p'>
          Valoramos la colaboración interna y externa para lograr los mejores resultados.
          </p>
          
        </div>
        </div>
        <br/><br/>
        <Footer />
      </>
    );
  }
  
  export default Equipo;
  