import React from 'react';
import './App.css';
import insta from './assets/insta.jpg';
import linkedin from './assets/linkedin.jpg';
import tiktok from './assets/tiktok.png';
import face from './assets/Facebook.png';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <p>AvxÜP Solutions SAS</p>
          <p>NIT: 901788132-4</p>
          <p>Calle 16CBIS #98ª-97 Bogotá D.C</p>
        </div>
        <div className="footer-contact">
          <p>avxupsas@outlook.es</p>
        </div>
        <div className="footer-social">
          
          <a href="https://www.facebook.com/profile.php?id=61556074814226" target="_blank" rel="noopener noreferrer">
            <img style={{ height: '30px', marginRight:'15px'}} src={face} alt="Twitter" />
          </a>
          <a href="https://www.tiktok.com/@avxupsolutions" target="_blank" rel="noopener noreferrer">
            <img style={{ height: '30px', marginRight:'15px'}} src={tiktok} alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/company/avx%C3%BCp-solutions-sas/" target="_blank" rel="noopener noreferrer">
            <img style={{ height: '30px', marginRight:'15px'}} src={linkedin} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/avxupsolutions/" target="_blank" rel="noopener noreferrer">
            <img style={{ height: '30px' }} src={insta} alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
