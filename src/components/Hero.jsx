import React, { useEffect, useRef, useState } from 'react';
import '../styles/Hero.css';
import { useTranslation } from 'react-i18next';
import photo from '../assets/Photo_4.png';


function Hero() {
  const { t } = useTranslation('hero');
  const roles = t('animatedRoles', { returnObjects: true });

  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const current = roles[wordIndex % roles.length];
    let updatedText;

    if (isDeleting) {
      updatedText = current.substring(0, charIndex - 1);
    } else {
      updatedText = current.substring(0, charIndex + 1);
    }

    setDisplayedText(updatedText);

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && updatedText === current) {
      setPause(true);
      setTimeout(() => setPause(false), 1000);
      setIsDeleting(true);
      return;
    }

    if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % roles.length);
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roles, wordIndex, pause]);

  return (
    <section className={`hero-section ${document.documentElement.dir === 'rtl' ? 'rtl' : ''}`}>
      <div className="hero-content">
        <span className="hero-badge">{t('badge')}</span>
        <h1 className="hero-title">
  {t('greeting')} <br />
  <span className="highlight">{t('name')}</span>
</h1>

        <h2 className="hero-subtitle">
        <span
  className="animated-text"
  dangerouslySetInnerHTML={{
    __html:
      window.innerWidth <= 1024
        ? displayedText.replace('&', '<br />&')
        : displayedText,
  }}
/>

        </h2>
        <p className="hero-description">{t('description')}</p>
      </div>
      <div className="hero-image">
      <img
  src={photo}
  alt={t('name')}
  className="hero-photo"
/>

      </div>
    </section>
  );
}

export default Hero;
