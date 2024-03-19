import React from 'react';
import alied from './assets/alied.jpg';
import legrant from './assets/legrant.jpg';
import siemon from './assets/siemon.jpg';
import pandui from './assets/pandui.jpg';
import cisco from './assets/cisco.png';
import alcatel from './assets/alcatel.png';
import './App.css';

function Aliados() {
  return (
    <>
      <h2>Aliados Tecnologicos</h2>
      <hr />
      <div className='servicios'>
        <main>
          <section>
            <div className="card-socios">
              <img src={alied} alt="Cliente" style={{ maxWidth: '150px', maxHeight: '150px' }} />
            </div>
            <div className="card-socios">
              <img src={alcatel} alt="Cliente" style={{ maxWidth: '150px', maxHeight: '150px' }} />
            </div>
            <div className="card-socios">
              <img src={cisco} alt="Cliente" style={{ maxWidth: '150px', maxHeight: '150px' }} />
            </div>
            <div className="card-socios">
              <img src={legrant} alt="Cliente" style={{ maxWidth: '150px', maxHeight: '150px' }} />
            </div>
            <div className="card-socios">
              <img src={siemon} alt="Cliente" style={{ maxWidth: '150px', maxHeight: '150px' }} />
            </div>
            <div className="card-socios">
              <img src={pandui} alt="Cliente" style={{ maxWidth: '150px', maxHeight: '150px' }} />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Aliados;
