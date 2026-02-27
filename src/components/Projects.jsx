import React, { useState } from 'react';
import '../styles/Projects.css';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  // 🚀 DevOps & Infrastructure Projects
  {
    title: 'AirPlane Tracker',
    descriptionKey: 'airplane_tracker_desc',
    image: '',
    link: 'https://roshpinaoverhead.online',
    github: 'https://github.com/algoldenberg/AirPlaneTracker',
    categories: ['featured', 'devops', 'infrastructure']
  },
  {
    title: 'AI Voice Training Simulator',
    descriptionKey: 'ai_voice_desc',
    image: '',
    link: '',
    github: 'https://github.com/algoldenberg/AI-Voice-Training-Simulator',
    categories: ['featured', 'devops', 'infrastructure']
  },
  {
    title: 'DevOps Infrastructure Provisioning Tool',
    descriptionKey: 'devops_provisioning_desc',
    image: '',
    link: '',
    github: 'https://github.com/algoldenberg/infra-automation',
    categories: ['featured', 'devops', 'automation']
  },
  {
    title: 'Home Infrastructure Automation',
    descriptionKey: 'home_infrastructure_desc',
    image: '',
    link: '',
    github: 'https://github.com/algoldenberg/home-infrastructure-automation',
    categories: ['featured', 'devops', 'automation']
  },
  {
    title: 'Nekudot Tax Calculator',
    descriptionKey: 'nekudot_desc',
    image: '',
    link: 'https://nekudot-calculator.netlify.app/',
    github: '',
    categories: ['featured', 'webapp', 'civic']
  },
  {
    title: 'Darcon Calculator',
    descriptionKey: 'darcon_desc',
    image: '',
    link: 'https://darcon-calculator.netlify.app/',
    github: '',
    categories: ['featured', 'webapp', 'civic']
  },
  // 🟢 Client Projects
  {
    title: 'AI - Business Architect',
    descriptionKey: 'aiba_desc',
    image: '',
    link: 'https://aibahub.com/en/',
    github: '',
    categories: ['automation', 'client']
  },
  {
    title: 'AIBA Diagnostic Bot',
    descriptionKey: 'diagnostic_desc',
    image: '',
    link: 'https://t.me/AIBA_Diagnostic_bot',
    github: '',
    categories: ['automation', 'client']
  },
  {
    title: 'Hr Helper Bot',
    descriptionKey: 'hr_bot_desc',
    image: '',
    link: 'https://t.me/HrHelperFlowbot',
    github: '',
    categories: ['featured', 'automation', 'client']
  },
  {
    title: 'AudioHebbot',
    descriptionKey: 'audiohebbot_desc',
    image: '',
    link: 'https://t.me/AudioHebbot',
    github: '',
    categories: ['automation']
  },
  // 🏢 Corporate Work
  {
    title: 'Ozon League',
    descriptionKey: 'ozon_league_desc',
    image: '',
    link: 'https://ozon-league.netlify.app',
    github: '',
    categories: ['client']
  },
  {
    title: 'Ozon KAM School',
    descriptionKey: 'ozon_kam_desc',
    image: '',
    link: 'https://ozon-kam-school.netlify.app',
    github: '',
    categories: ['client']
  },
  {
    title: 'Ozon Lead',
    descriptionKey: 'ozon_lead_desc',
    image: '',
    link: 'https://ozon-lead.netlify.app',
    github: '',
    categories: ['client']
  },
  {
    title: 'Equitech Website',
    descriptionKey: 'equitech_desc',
    image: '',
    link: 'https://www.equitech.co.il/',
    github: '',
    categories: ['client']
  },
  {
    title: 'FinTech Aviv Website',
    descriptionKey: 'fintech_desc',
    image: '',
    link: 'https://www.fintech-aviv.com/',
    github: '',
    categories: ['client']
  },
  // 🎮 Fun / Student Projects
  {
    title: 'Color Desk',
    descriptionKey: 'color_desk_desc',
    image: '',
    link: 'https://color-desk-student-project.netlify.app/',
    github: '',
    categories: ['fun', 'webapp']
  },
  {
    title: 'AIM Game',
    descriptionKey: 'aim_game_desc',
    image: '',
    link: 'https://aim-training-student-project.netlify.app/',
    github: '',
    categories: ['fun']
  },
  {
    title: 'Slider Showcase',
    descriptionKey: 'slider_desc',
    image: '',
    link: 'https://slider-student-project.netlify.app/',
    github: '',
    categories: ['fun']
  },
  {
    title: 'Trello-like Board',
    descriptionKey: 'trello_desc',
    image: '',
    link: 'https://drag-and-prod-desk-student-project.netlify.app/',
    github: '',
    categories: ['fun', 'webapp']
  },
  {
    title: 'Postcards Gallery',
    descriptionKey: 'postcards_desc',
    image: '',
    link: 'https://postcards-student-project.netlify.app/',
    github: '',
    categories: ['fun']
  },
  {
    title: 'Aspect Ratio Calculator',
    descriptionKey: 'aspect_ratio_desc',
    image: '',
    link: 'https://aspect-ratio-student-project.netlify.app/',
    github: '',
    categories: ['fun', 'webapp']
  },
  {
    title: 'Color the Parrot',
    descriptionKey: 'color_parrot_desc',
    image: '',
    link: 'https://color-the-parrot-student-project.netlify.app/',
    github: '',
    categories: ['fun']
  },
  {
    title: 'Drum Kit',
    descriptionKey: 'drumkit_desc',
    image: '',
    link: 'https://drum-kit-student-project.netlify.app/',
    github: '',
    categories: ['fun']
  },
];

const categories = ['all', 'featured', 'devops', 'infrastructure', 'automation', 'webapp', 'client', 'civic', 'fun'];

function Projects() {
  const { t } = useTranslation('projects');
  const [activeCategory, setActiveCategory] = useState('featured');
  const [expandedProjects, setExpandedProjects] = useState({});

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.categories.includes(activeCategory));

  const toggleExpand = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    // Обрезаем до последнего пробела перед maxLength
    const truncated = text.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return truncated.slice(0, lastSpace) + '...';
  };

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
        {filteredProjects.map((project, index) => {
          const description = t(project.descriptionKey);
          const isExpanded = expandedProjects[index];
          const shouldTruncate = description.length > 150;

          return (
            <div className="project-card" key={index}>
              {project.image && <img src={project.image} alt={project.title} />}
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>
                  {isExpanded || !shouldTruncate 
                    ? description 
                    : truncateText(description)}
                </p>
                {shouldTruncate && (
                  <button 
                    className="read-more-btn" 
                    onClick={() => toggleExpand(index)}
                  >
                    {isExpanded ? 'Show less' : 'Read more'}
                  </button>
                )}
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-btn github-btn">
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-btn demo-btn">
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;