import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Skills.css';

function Skills() {
  const { t } = useTranslation('skills');

  const techStack = [
    'Docker', 'Python', 'Kubernetes', 'Nginx', 'Linux',
    'GitHub Actions', 'Bash', 'FastAPI', 'Redis', 'SQLite',
    'React', 'JavaScript', 'Git', 'CI/CD', 'Microservices'
  ];

  const keySkills = [
    'infrastructureAutomation',
    'cicdPipelines',
    'containerization',
    'microservices',
    'cloudInfrastructure',
    'systemMonitoring',
    'processOptimization'
  ];

  const isRTL = document.documentElement.dir === 'rtl';

  return (
    <section className={`skills-section ${isRTL ? 'rtl' : ''}`}>
      <div className="skills-container">
        <h2 className="skills-title">{t('title')}</h2>

        <div className="tech-stack">
          {techStack.map((tech, idx) => (
            <span key={idx} className="tech-item">{tech}</span>
          ))}
        </div>

        <ul className="key-skills">
          {keySkills.map((skill, idx) => (
            <li key={idx}>{t(skill)}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
