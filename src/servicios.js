import React from 'react';
import './App.css';
function Servicios() {
  return (
    <>
      <h2 className='h2'>Nuestros Servicios</h2>
      <div id="servicios" className='servicios' style={{ textAlign: 'center' }}>
        <hr />
        <div className="video-container" style={{ display: 'inline-block' }}>
          <iframe
            width="400"
            height="315"
            src="https://www.youtube.com/embed/MP2vv0kw3Ys"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <br />
      </div>
    </>
  );
}

export default Servicios;
