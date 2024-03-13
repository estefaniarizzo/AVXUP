import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './App.css';
import Logo from "./logo.jpg";
import Slider from './slider';
function ContactForm() {
  const [state, handleSubmit] = useForm("xvoezodw");

  if (state.succeeded) {
    // Muestra una alerta si el envío fue exitoso
    alert('Thanks for joining!');

    // Resetea los valores de los campos del formulario
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('ciudad').value = '';
    document.getElementById('message').value = '';
  }

  return (

    <div className="app-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          name="name"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="error-name"
        />
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="error-message"
        />
        <label htmlFor="ciudad" className="form-label">
          Ciudad
        </label>
        <input
          id="ciudad"
          type="text"
          name="ciudad"
        />
        <ValidationError
          prefix="Ciudad"
          field="ciudad"
          errors={state.errors}
          className="error-message"
        />
        <label htmlFor="text" className="form-label">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          className="form-label"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} className="continue-application">
          <div>
            <div className="pencil"></div>
            <div className="folder">
              <div className="top">
                <svg viewBox="0 0 24 27">
                  <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
              </div>
              <div className="paper"></div>
            </div>
          </div>
          Enviar
        </button>
      </form>
    </div>
  );
}


function App() {
  const [clientes, setClientes] = useState(1);
  const [ciudades, setCiudades] = useState(1);
  const [servicios, setServicios] = useState(1);


  useEffect(() => {
    const clientesInterval = setInterval(() => {
      setClientes((clientes) => (clientes < 10 ? clientes + 1 : 10));
    }, 1000);

    const ciudadesInterval = setInterval(() => {
      setCiudades((ciudades) => (ciudades < 50 ? ciudades + 1 : 50));
    }, 1000);

    const serviciosInterval = setInterval(() => {
      setServicios((servicios) => (servicios < 20 ? servicios + 1 : 20));
    }, 1000);

    return () => {
      clearInterval(clientesInterval);
      clearInterval(ciudadesInterval);
      clearInterval(serviciosInterval);
    };
  }, []);

  return (
    <><div>
      <navbar>
        <img src={Logo} alt="AVX UP Logo" /> <h6 className='h5'>Redes y Tecnologías</h6>
        <ul>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#quienes-somos">Quienes somos</a></li>
          <li><a href="#contacto">Contactanos</a></li>
        </ul>
      </navbar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Slider/>
      <div id="servicios" className='servicios'>
        <h2>Nuestros Servicios</h2>
        <hr></hr>
        <main>
          <section>
            <div className="card">
              <h4>Cableado Estructurado y Fibra Óptica</h4>
              <p>Nuestra especialidad radica en diseñar e implementar sistemas de cableado estructurado
                y fibra óptica. Estos no solo garantizan una conectividad confiable, sino también una base sólida
                para el crecimiento futuro de tu empresa. Imagina cada cable como un hilo que teje la red de posibilidades para tu éxito</p>
            </div>
            <div className="card">
              <h4>Instalación Puntos de Red Certificados</h4>
              <p>No se trata solo de conectar cables. Creamos puntos de acceso estratégicos que cumplen con rigurosos
                estándares de certificación. La señal fluye sin interrupciones, desde la sala de juntas hasta el rincón
                más alejado. Tu empresa está respaldada por una infraestructura robusta.</p>
            </div>
            <div className="card">
              <h4>Integración de Dispositivos de Red</h4>
              <p>Configuramos switches, routers y servidores con precisión quirúrgica.
                Cada dispositivo es una pieza clave en el rompecabezas de tu red.
                La sincronización perfecta garantiza una comunicación fluida y una experiencia sin tropiezos.</p>
            </div>
          </section>
        </main>
        <main>
          <section>
            <div className="card">
              <h4>Traslado de Datacenter y Organización de Racks</h4>
              <p>Imagina mudar un edificio entero sin que nadie lo note. Eso es lo que hacemos.
                Nuestro equipo se encarga de trasladar datacenters sin interrupciones. Además,
                organizamos tus racks como un maestro ajedrecista: eficiencia y orden en cada movimiento.</p>
            </div>
            <div className="card">
              <h4>Mantenimientos Preventivos y Correctivos</h4>
              <p>No esperamos a que algo falle. Establecemos programas
                de mantenimiento preventivo y correctivos para mantener tu red en su mejor forma.
                Y si surge algún problema, actuamos con la mayor velocidad posible. Tu tranquilidad es nuestra prioridad.</p>
            </div>

          </section>
        </main>

        <br />
      </div>
      
      <br></br>
      <div class="section-counter paralax-mf bg-image">
        <div class="overlay-mf"></div>
        <div class="container position-relative">
          <div class="row">
            <div class="col-sm-4 col-lg-4">
              <div class="counter-box counter-box pt-4 pt-md-0">
                <div class="counter-ico">
                  <span class="ico-circle"><i class="bi bi-person"></i></span>
                </div>
                <div class="counter-num">
                  <p class="counter">{clientes}</p>
                  <span class="counter-text">CLIENTES</span>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-lg-4">
              <div class="counter-box pt-4 pt-md-0">
                <div class="counter-ico">
                  <span class="ico-circle"><i class="bi bi-geo-alt"></i></span>
                </div>
                <div class="counter-num">
                  <p class="counter">{ciudades}</p>
                  <span class="counter-text">CIUDADES</span>
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
                  <span class="counter-text">SERVICIOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="quienes-somos" className='servicios'>
        <h2>Quienes somos</h2>
        <hr></hr>

        <main>
          <section>
            <div className="card">
              <h4>MISION</h4>
              <p>En AvxÜP, nuestra misión es liderar el mercado en soluciones integrales de infraestructura de redes, especializándonos en la instalación de cableado estructurado, puntos de red certificados y Fibra Óptica. Nos comprometemos a la integración experta de equipos de red, como routers y switches, para proporcionar a nuestros clientes sistemas de comunicación cohesivos y eficientes.</p>
            </div>
            <div className="card">
              <h4>VISION</h4>
              <p>Nuestra visión es ser el referente en diseño, implementación y mantenimiento de redes, impulsando la innovación tecnológica y la eficiencia operativa. Nos proyectamos como el aliado estratégico esencial para el éxito tecnológico de nuestros clientes, ofreciendo asesorías personalizadas y soluciones que se anticipan a las necesidades del mercado.</p>
            </div>

          </section>
        </main>

      </div>
      
      <div id="contacto">
        <h2>Contactanos</h2>
        <ContactForm />
      </div>
      <br></br>
    </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <p>AvxÜP Solutions SAS</p>
            <p>NIT: 901788132-4</p>
            <p>Calle 16CBIS #98ª-97 Bogotá D.C</p>
          </div>
          <div className="footer-contact">
            <p>Correo: avxupsas@outlook.es</p>
            <p>Celular: 3132328996</p>
          </div>
          <div className="footer-social">
            <p>Facebook: AvxÜP Solutions SAS</p>
            <p>TikTok: avxupsolutions</p>
            <p>X:  @AvxupSAS</p>
            <p>LinkedIn: AvxÜP Solutions SAS</p>
            <p>Instagram: avxupSolutions</p>
          </div>
        </div>
      </footer></>

  );
}



export default App;
