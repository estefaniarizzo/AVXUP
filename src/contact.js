import './App.css';
import React, { useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("xrgnaqpy");
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      ciudad: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      await handleSubmit(e);
      if (state.succeeded) {
        setFormData({
          name: '',
          email: '',
          ciudad: '',
          message: ''
        });
      }
    };
  
    return (
      <div id="contacto">
        <h2>Contactanos</h2>
      <div className="app-container">
        <form onSubmit={handleFormSubmit} className="contact-form">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.ciudad}
            onChange={handleChange}
          />
          <ValidationError
            prefix="Ciudad"
            field="ciudad"
            errors={state.errors}
            className="error-message"
          />
          <label htmlFor="message" className="form-label">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
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
      </div>
    );
  }
  export default ContactForm;