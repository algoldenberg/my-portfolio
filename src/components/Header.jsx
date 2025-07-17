import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';

function Header() {
  const { i18n, t } = useTranslation('header');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h2>{t('site_title')}</h2>
        <div className="language-switcher">
          <button onClick={() => changeLanguage('en')}>🇺🇸</button>
          <button onClick={() => changeLanguage('ru')}>🇷🇺</button>
          <button onClick={() => changeLanguage('he')}>🇮🇱</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
