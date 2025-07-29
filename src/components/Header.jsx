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

          {/* Мобильный селектор языка */}
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

          {/* Бургер */}
          <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
          </div>

          {/* Меню */}
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><a href={`${prefix}/#home`}>{t('nav.home')}</a></li>
            <li><a href={`${prefix}/#projects`}>{t('nav.projects')}</a></li>
            <li><a href={`${prefix}/#skills`}>{t('nav.skills')}</a></li>
            <li className="mobile-socials">
              <div className="social-icons">
                <a href="https://t.me/goldenberga" target="_blank" rel="noreferrer" className="social-icon">
                  <FaTelegramPlane />
                </a>
                <a href="https://wa.me/972506967370" target="_blank" rel="noreferrer" className="social-icon">
                  <FaWhatsapp />
                </a>
                <a href="https://linkedin.com/in/aleks-goldenberg-841069256" target="_blank" rel="noreferrer" className="social-icon">
                  <FaLinkedinIn />
                </a>
              </div>
            </li>
            <li className="mobile-connect">
              <a href="mailto:algoldenberga@gmail.com" className="connect-btn">
                <span>{t('nav.connect')}</span>
              </a>
            </li>
          </ul>

          {/* Десктоп */}
          <div className="nav-right">
            <div className="nav-desktop">
              <select
                value={currentLang}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="language-selector"
              >
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="he">HE</option>
              </select>

              <div className="social-icons">
                <a href="https://t.me/goldenberga" target="_blank" rel="noreferrer" className="social-icon">
                  <FaTelegramPlane />
                </a>
                <a href="https://wa.me/972506967370" target="_blank" rel="noreferrer" className="social-icon">
                  <FaWhatsapp />
                </a>
                <a href="https://linkedin.com/in/aleks-goldenberg-841069256" target="_blank" rel="noreferrer" className="social-icon">
                  <FaLinkedinIn />
                </a>
              </div>

              <a href="mailto:algoldenberga@gmail.com" className="connect-btn">
                <span>{t('nav.connect')}</span>
              </a>
            </div>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default Header;
