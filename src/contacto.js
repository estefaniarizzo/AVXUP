import './App.css';
import Navbar from './Navbar';
import Footer from './footer';
import ContactForm from './contact';

function Contacto() {
    return (
        <>
            <Navbar />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p className='p'>Si quieres saber más sobre nosotros, puedes contactarnos a través de nuestro formulario web, nuestro correo electrónico o nuestro teléfono. Estaremos encantados de atenderte y de ofrecerte la mejor solución para tu proyecto.</p>
            <ContactForm />
            <br/>
            <Footer />
        </>
    );
}
export default Contacto;