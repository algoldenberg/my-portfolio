import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
  useLocation
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FunnyCard from './components/FunnyCard';
import BackToTop from './components/BackToTop';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [hash]);

  return null;
}

function LanguageWrapper() {
  const { lng } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
    document.documentElement.lang = lng || 'en';
  }, [lng, i18n]);

  return (
    <div className="app-container">
      <ScrollToHash />
      <Header />
      <main>
        <section id="home">
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <FunnyCard />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/en" />} />
        <Route path="/:lng/*" element={<LanguageWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
