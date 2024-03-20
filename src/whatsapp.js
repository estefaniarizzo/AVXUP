import React from 'react';
import whatsapp from './assets/whatsapp.png';

function OpenWhatsApp() {
  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=3132328996', '_blank');
  };

  return (
    <div id="whatsapp-container">
      <button id="whatsapp-button" onClick={openWhatsApp}>
        <img src={whatsapp} alt="WhatsApp" />
      </button>
    </div>
  );
}

export default OpenWhatsApp;
