import React from 'react';
import './App.css';
import Slider from './slider';
import Navbar from './Navbar';
import ContactForm from './contact';
import Aliados from './aliados';
import Servicios from './servicios';
import Counter from './counter';
import Footer from './footer';
import Nosotros from './nosotros';
function Home() {
  return (
    <><div>
      <Navbar />
      <br />
      <Slider />
      <br />
      <br />
      <Nosotros />
      <Aliados />
    </div>
      <br></br>
      <Servicios />
      <br></br>
      <Counter />
      <ContactForm />
      <br></br>
      <Footer />
    </>

  );
}
export default Home;
