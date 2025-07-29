import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { FaTelegramPlane, FaWhatsapp, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import '../styles/Header.css';

function Header() {
  const { t, i18n } = useTranslation('header');
  const location = useLocation();
  const navigate = useNavigate();
  const { lng } = useParams();
  const currentLang = lng || i18n.language || 'en';

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

  const prefix = `/${currentLang}`;

  return (
    <header className={`header ${currentLang === 'he' ? 'rtl' : ''}`}>
      <div className="container">
        <nav className="nav">
          <ul className="nav-links">
            <li><a href={`${prefix}/#home`}>{t('nav.home')}</a></li>
            <li><a href={`${prefix}/#skills`}>{t('nav.skills')}</a></li>
            <li><a href={`${prefix}/#projects`}>{t('nav.projects')}</a></li>
          </ul>

          <div className="nav-right">
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
