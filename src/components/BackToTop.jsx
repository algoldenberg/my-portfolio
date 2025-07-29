import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/BackToTop.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const toggleVisibility = () => {
        setVisible(window.scrollY > 300);
      };
  
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    return (
      <button
        className={`back-to-top ${visible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button>
    );
  }
  
  export default BackToTop;