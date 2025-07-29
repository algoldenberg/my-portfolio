import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaTelegramPlane, FaWhatsapp, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  const { t, i18n } = useTranslation('footer');
  const year = new Date().getFullYear();
  const isRtl = i18n.language === 'he';

  return (
    <footer className={`footer ${isRtl ? 'rtl' : ''}`}>
      <div className="footer-content">
        <div className="footer-left">
          <p>© {year} Alex Goldenberg</p>
          <p>
            <a href="mailto:algoldenberga@gmail.com">algoldenberga@gmail.com</a>
          </p>
        </div>
        <div className="footer-right">
          <a href="https://t.me/goldenberga" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
          <a href="https://wa.me/972506967370" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://linkedin.com/in/aleks-goldenberg-841069256" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
