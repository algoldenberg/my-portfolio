import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const { t, i18n } = useTranslation('header'); // <- добавлен namespace 'header'
  const location = useLocation();
  const currentLang = i18n.language || 'en';

  const handleLanguageChange = (lang) => {
    if (lang !== currentLang) {
      const path = location.pathname.replace(`/${currentLang}`, `/${lang}`);
      i18n.changeLanguage(lang);
      window.location.pathname = path;
    }
  };

  return (
    <header className={`header ${currentLang === 'he' ? 'rtl' : ''}`}>
      <div className="container">
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#skills">{t('nav.skills')}</a></li>
            <li><a href="#projects">{t('nav.projects')}</a></li>
          </ul>

          <div className="nav-right">
            <div className="social-icons">
              <a href="https://t.me" target="_blank" rel="noopener noreferrer">✈</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">in</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">f</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">🖼</a>
              <a href="https://portfolio.com" target="_blank" rel="noopener noreferrer">🌐</a>
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

            <Link to="/#contact" className="connect-btn">
              {t('nav.connect')}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
