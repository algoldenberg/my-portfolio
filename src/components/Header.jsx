import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { FaTelegramPlane, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import '../styles/Header.css';

function Header() {
  const { t, i18n } = useTranslation('header');
  const location = useLocation();
  const navigate = useNavigate();
  const { lng } = useParams();
  const currentLang = lng || i18n.language || 'en';
  const prefix = `/${currentLang}`;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('dir', currentLang === 'he' ? 'rtl' : 'ltr');
  }, [currentLang]);

  const handleLanguageChange = (lang) => {
    if (lang !== currentLang) {
      const newPath = location.pathname.replace(`/${currentLang}`, `/${lang}`);
      i18n.changeLanguage(lang);
      navigate(newPath);
    }
  };

  const renderFlag = (flag, lang) => (
    <button
      key={lang}
      className={`lang-flag-btn ${currentLang === lang ? 'active' : ''}`}
      onClick={() => handleLanguageChange(lang)}
    >
      <img
        src={`https://flagcdn.com/w40/${flag}.png`}
        srcSet={`https://flagcdn.com/w80/${flag}.png 2x`}
        width="24"
        height="16"
        alt={flag}
        className="lang-flag"
      />
    </button>
  );

  return (
    <header className={`header ${currentLang === 'he' ? 'rtl' : ''}`}>
      <div className="container">
        <nav className="nav">

          {/* Мобильный флаг */}
          <div className="nav-mobile-lang">
            {renderFlag('us', 'en')}
            {renderFlag('ru', 'ru')}
            {renderFlag('il', 'he')}
          </div>

          <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
          </div>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><a href={`${prefix}/#home`} onClick={() => setMenuOpen(false)}>{t('nav.home')}</a></li>
            <li><a href={`${prefix}/#projects`} onClick={() => setMenuOpen(false)}>{t('nav.projects')}</a></li>
            <li><a href={`${prefix}/#skills`} onClick={() => setMenuOpen(false)}>{t('nav.skills')}</a></li>
            <li className="mobile-connect">
              <a href="mailto:algoldenberga@gmail.com" className="connect-btn">{t('nav.connect')}</a>
            </li>
            <li className="mobile-socials">
              <div className="social-icons">
                <a href="https://t.me/goldenberga" target="_blank" rel="noreferrer" className="social-icon"><FaTelegramPlane /></a>
                <a href="https://wa.me/972506967370" target="_blank" rel="noreferrer" className="social-icon"><FaWhatsapp /></a>
                <a href="https://linkedin.com/in/aleks-goldenberg-841069256" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedinIn /></a>
                <a href="https://github.com/algoldenberg" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
              </div>
            </li>
          </ul>

          <div className="nav-right nav-desktop">
            <div className="social-icons">
              <a href="https://t.me/goldenberga" target="_blank" rel="noreferrer" className="social-icon"><FaTelegramPlane /></a>
              <a href="https://wa.me/972506967370" target="_blank" rel="noreferrer" className="social-icon"><FaWhatsapp /></a>
              <a href="https://linkedin.com/in/aleks-goldenberg-841069256" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedinIn /></a>
              <a href="https://github.com/algoldenberg" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
            </div>

            <a href="mailto:algoldenberga@gmail.com" className="connect-btn">
              <span>{t('nav.connect')}</span>
            </a>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default Header;
