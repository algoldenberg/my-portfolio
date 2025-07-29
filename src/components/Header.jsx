import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { FaTelegramPlane, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
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

  return (
    <header className={`header ${currentLang === 'he' ? 'rtl' : ''}`}>
      <div className="container">
        <nav className="nav">

          {/* Левый край: селектор языка */}
          <div className="nav-mobile-lang">
            <select
              value={currentLang}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="language-selector"
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="he">HE</option>
            </select>
          </div>

          {/* Бургер-кнопка */}
          <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
          </div>

          {/* Навигация (десктоп и мобильный open) */}
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
              </div>
            </li>
          </ul>

          {/* Правая часть только для десктопа */}
          <div className="nav-right nav-desktop">
            <div className="social-icons">
              <a href="https://t.me/goldenberga" target="_blank" rel="noreferrer" className="social-icon"><FaTelegramPlane /></a>
              <a href="https://wa.me/972506967370" target="_blank" rel="noreferrer" className="social-icon"><FaWhatsapp /></a>
              <a href="https://linkedin.com/in/aleks-goldenberg-841069256" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedinIn /></a>
            </div>
            <select
              value={currentLang}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="language-selector"
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="he">HE</option>
            </select>
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
