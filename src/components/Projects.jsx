import React, { useState } from 'react';
import '../styles/Projects.css';
import { useTranslation } from 'react-i18next';

const projectsData = [
  // 🟢 Featured Projects
  {
    title: 'AI - Business Archytect',
    descriptionKey: 'aiba_desc',
    image: '',
    link: 'https://aibahub.com/en/',
    categories: ['featured', 'automation', 'client']
  },
  {
    title: 'AIBA Diagnostic Bot',
    descriptionKey: 'diagnostic_desc',
    image: '',
    link: 'https://t.me/AIBA_Diagnostic_bot',
    categories: ['automation', 'client']
  },
  {
    title: 'Hr Helper bot',
    descriptionKey: 'hr_bot_desc',
    image: '',
    link: 'https://aibahub.com/en/',
    categories: ['featured', 'automation', 'client']
  },
  {
    title: 'Nekudot Tax Calculator',
    descriptionKey: 'nekudot_desc',
    image: '',
    link: 'https://nekudot-calculator.netlify.app/',
    categories: ['featured', 'webapp', 'civic']
  },
  // 🧠 Bots
  {
    title: 'AudioHebbot',
    descriptionKey: 'audiohebbot_desc',
    image: '',
    link: 'https://t.me/AudioHebbot',
    categories: ['automation']
  },
  // 🏢 Corporate Work
  {
    title: 'Ozon League',
    descriptionKey: 'ozon_league_desc',
    image: '',
    link: 'https://ozon-league.netlify.app',
    categories: ['client']
  },
  {
    title: 'Ozon KAM School',
    descriptionKey: 'ozon_kam_desc',
    image: '',
    link: 'https://ozon-kam-school.netlify.app',
    categories: ['client']
  },
  {
    title: 'Ozon Lead',
    descriptionKey: 'ozon_lead_desc',
    image: '',
    link: 'https://ozon-lead.netlify.app',
    categories: ['client']
  },
  // 🇮🇱 Internship
  {
    title: 'Equitech Website',
    descriptionKey: 'equitech_desc',
    image: '',
    link: 'https://www.equitech.co.il/',
    categories: ['client']
  },
  {
    title: 'FinTech Aviv Website',
    descriptionKey: 'fintech_desc',
    image: '',
    link: 'https://www.fintech-aviv.com/',
    categories: ['client']
  },
  // 🎮 Fun / Student Projects
  {
    title: 'Color Desk',
    descriptionKey: 'color_desk_desc',
    image: '',
    link: 'https://color-desk-student-project.netlify.app/',
    categories: ['fun', 'webapp']
  },
  {
    title: 'AIM Game',
    descriptionKey: 'aim_game_desc',
    image: '',
    link: 'https://aim-training-student-project.netlify.app/',
    categories: ['fun']
  },
  {
    title: 'Slider Showcase',
    descriptionKey: 'slider_desc',
    image: '',
    link: 'https://slider-student-project.netlify.app/',
    categories: ['fun']
  },
  {
    title: 'Trello-like Board',
    descriptionKey: 'trello_desc',
    image: '',
    link: 'https://drag-and-prod-desk-student-project.netlify.app/',
    categories: ['fun', 'webapp']
  },
  {
    title: 'Postcards Gallery',
    descriptionKey: 'postcards_desc',
    image: '',
    link: 'https://postcards-student-project.netlify.app/',
    categories: ['fun']
  },
  {
    title: 'Aspect Ratio Calculator',
    descriptionKey: 'aspect_ratio_desc',
    image: '',
    link: 'https://aspect-ratio-student-project.netlify.app/',
    categories: ['fun', 'webapp']
  },
  {
    title: 'Color the Parrot',
    descriptionKey: 'color_parrot_desc',
    image: '',
    link: 'https://color-the-parrot-student-project.netlify.app/',
    categories: ['fun']
  },
  {
    title: 'Drum Kit',
    descriptionKey: 'drumkit_desc',
    image: '',
    link: 'https://drum-kit-student-project.netlify.app/',
    categories: ['fun']
  },
];

const categories = ['all', 'featured', 'automation', 'webapp', 'client', 'civic', 'fun'];

function Projects() {
  const { t } = useTranslation('projects');
  const [activeCategory, setActiveCategory] = useState('featured');

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.categories.includes(activeCategory));

  return (
    <section className="projects-section">
      <h2 className="projects-title">{t('title')}</h2>
      <p className="projects-description">{t('description')}</p>
      <div className="filter-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {t(`categories.${cat}`)}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <a href={project.link} target="_blank" rel="noreferrer" className="project-card" key={index}>
            {project.image && <img src={project.image} alt={project.title} />}
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{t(project.descriptionKey)}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
