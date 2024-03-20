import './App.css';
import Navbar from './Navbar';
import Footer from './footer';

function Quienessomos() {
    return (
        <>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div id="quienes-somos" className='servicios'>
                <h2>Quienes somos</h2>
                <hr></hr>
                <p className='p'>AvxÜP Solutions SAS.  Es una empresa colombiana que ofrece soluciones integrales
                    en el campo de las redes y las telecomunicaciones. Contamos con un equipo de profesionales altamente
                    cualificados y con amplia experiencia en el sector, que se encargan de diseñar, instalar y mantener
                    sistemas de cableado estructurado, fibra óptica, equipos de comunicaciones como switch, routers y
                    otros dispositivos relacionados con las redes.</p>
                <p className='p'>Nuestros valores son la innovación, el compromiso, la responsabilidad y la satisfacción del cliente.
                    Nuestra visión es ser una empresa líder y referente en el mercado de las redes y las telecomunicaciones,
                    ofreciendo soluciones a medida, personalizadas y de vanguardia.</p>
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
            <Footer />
        </>
    );
}
export default Quienessomos;