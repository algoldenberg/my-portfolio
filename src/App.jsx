import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <main>
      <div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '70vh',
  textAlign: 'center',
  color: "black"
}}>
  <img
    src="https://i.pinimg.com/736x/53/2a/fa/532afae6b519d8506d2b8b52add12611.jpg"
    alt="Cool Developer"
    style={{
      maxWidth: '300px',
      width: '100%',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.6)'
    }}
  />
  <p style={{
    marginTop: '1rem',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    fontFamily: 'JetBrains Mono, monospace'
  }}>
    hire me I'm cool
  </p>
</div>

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
