// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './App.css';
import Vision from "./vision.png";
import Mision from "./mision.png"
import Logo from "./logo.png";
function ContactForm() {
  const [state, handleSubmit] = useForm("xvoezodw");

  if (state.succeeded) {
    // Muestra una alerta si el envío fue exitoso
    alert('Thanks for joining!');

    // Resetea los valores de los campos del formulario
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // No necesitas retornar nada si estás usando alert, pero si deseas, puedes retornar un componente vacío
    
  }
  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="email" className="form-label">
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
        <div class="pencil"></div>
        <div class="folder">
            <div class="top">
                <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
            </div>
            <div class="paper"></div>
        </div>
    </div>
   Enviar
</button>
    </form>
    </div>
  );
}
function App() {
  return (
    <>
    <navbar> <img src={Logo} alt="AVX UP Logo" />Bienvenido a AVX UP</navbar>
    <br></br>
    <br></br><br></br>
    <div className='servicios'>
      <h2>Nuestros Servicios</h2>
      <main>
    <section>
      <div className="card">
        <h4>UNIDAD INTEGRACIÓN DE CENTROS DE COMANDO Y CONTROL</h4>
        <p>Brindamos soluciones avanzadas de tecnología para la implementación de salas de comando y control automatizadas.</p>
      </div>
      <div className="card">
        <h4>UNIDAD DE TELECOMUNICACIONES</h4>
        <p>Brindamos soluciones avanzadas de telecomunicaciones en los sitios más apartados del país.</p>
      </div>
      <div className="card">
        <h4>UNIDAD INTELIGENCIA Y CIBERSEGURIDAD</h4>
        <p>Brindamos soluciones tecnológicas avanzadas que buscan adelantarse a los movimientos de los criminales y terroristas.</p>
      </div>
    </section>
  </main>
  <br></br>
    </div>
    <h2>Quienes somos</h2>
    <div className='App'>
      
      <main>
        <section className='course-list'>
        <CourseCard
            
            description="Conectar a personas de todo el mundo, facilitando la creación de comunidades auténticas, el intercambio de ideas y experiencias, y promoviendo la inclusión y el entendimiento mutuo a través de una plataforma segura y fácil de usar."
            imageSrc={Mision}
          />
          <CourseCard
            
            description="Nos esforzamos por ser la plataforma de redes sociales líder a nivel mundial, donde la diversidad es celebrada, las voces son escuchadas y donde cada usuario puede encontrar un espacio para expresarse libremente, conectarse con otros y contribuir positivamente al mundo."
            imageSrc={Vision}
          />
        </section>
      </main></div>
    <h2 >Contactanos</h2>
    <ContactForm />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,192L24,181.3C48,171,96,149,144,149.3C192,149,240,171,288,149.3C336,128,384,64,432,48C480,32,528,64,576,106.7C624,149,672,203,720,213.3C768,224,816,192,864,181.3C912,171,960,181,1008,181.3C1056,181,1104,171,1152,165.3C1200,160,1248,160,1296,144C1344,128,1392,96,1416,80L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
    
    </>
  );
  function CourseCard({ title, description, imageSrc }) {
    return (
      <div className="course-card">
        <img src={imageSrc} alt={title} />
        
        <p> {description}</p>
        
      </div>
    );
}}
export default App;