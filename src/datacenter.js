import './App.css';
import Navbar from './Navbar';
import Footer from './footer';
import datacenter from './assets/datacenter1.jpg';
const Datacenters =() =>{
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
                  <img src={datacenter} alt="Intregracionredes" className="fila-img" style={{ maxWidth: '580px', maxHeight: '580px', borderRadius:'35px' }} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="texto">
          <h2 style={{ marginLeft: '45px' }}>Translado de Datacenters y organización de racks </h2>
          <hr />
          <p className='p'>
          Imagina mudar un edificio entero sin que nadie lo note. Eso es lo que hacemos. Nuestro equipo se encarga de trasladar datacenters sin interrupciones. Además, organizamos tus racks como un maestro ajedrecista: eficiencia y orden en cada movimiento.
          </p>
          
        </div>
        </div>
        <br/><br/>
        <Footer />
      </section>
    
  }
  
  export default Datacenters;
  