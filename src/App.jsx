import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Skills from './components/Skills';

function LanguageWrapper() {
  const { lng } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Skills />
      <main>
      </main>
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
