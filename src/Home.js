import React from 'react';
import './App.css';
import Slider from './slider';
import Navbar from './Navbar';
// import Redes from './redes';
import ContactForm from './contact';
import Aliados from './aliados';
import Servicios from './servicios';
import Counter from './counter';
import Footer from './footer';
import Nosotros from './nosotros';
import OpenWhatsApp from './whatsapp';
function Home() {
  return (
    <>
      <Navbar />
      <br />
      <Slider />
      <OpenWhatsApp/>
      <br />
      <br />
      <Nosotros />
      <Aliados />
      <br></br>
      <Servicios />
      {/* <br></br>
      <Redes /> */}
      <br></br>
      <Counter />
      <ContactForm />
      <br></br>
      <Footer />
    </>
  );
}
export default Home;