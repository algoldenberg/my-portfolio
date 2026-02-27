# Alex Goldenberg - DevOps Engineer Portfolio

> Professional portfolio website showcasing DevOps projects, infrastructure automation, and technical expertise.

**Live Site:** [sashagolden.xyz](https://sashagolden.xyz)

## 🎯 Overview

Personal portfolio website built with React and Vite, highlighting DevOps engineering projects, infrastructure automation solutions, and technical skills. Features multilingual support (English, Russian, Hebrew) and responsive design.

## 🛠️ Tech Stack

- **Frontend:** React 19.1, React Router
- **Build Tool:** Vite 7.0
- **Styling:** CSS3 (custom styles)
- **Icons:** React Icons
- **Internationalization:** i18next, react-i18next
- **Language Detection:** i18next-browser-languagedetector
- **Deployment:** VPS with Nginx

## ✨ Features

### Core Functionality
- **Multilingual Support** - English, Russian, Hebrew with automatic language detection
- **Responsive Design** - Mobile-first approach, works on all devices
- **Project Showcase** - Filterable project gallery with categories (DevOps, Infrastructure, Automation, etc.)
- **Dynamic Content** - Expandable project descriptions with "Read more" functionality
- **Direct Links** - GitHub repositories and live demo links for each project

### DevOps Projects Featured
1. **AirPlane Tracker** - Microservices architecture with Docker, FastAPI, React, Redis
2. **AI Voice Training Simulator** - Real-time STT/TTS with GPU deployment on Runpod
3. **DevOps Infrastructure Provisioning Tool** - Python-based automation with idempotent scripts
4. **Home Infrastructure Automation** - 24/7 Raspberry Pi system with Telegram bot control

### Technical Highlights
- RTL (Right-to-Left) support for Hebrew
- SEO-optimized with proper meta tags
- Smooth scroll navigation
- Category filtering system
- Social media integration (GitHub, LinkedIn, Telegram, WhatsApp)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/algoldenberg/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── locales/           # Translation files
│       ├── en/            # English translations
│       ├── ru/            # Russian translations
│       └── he/            # Hebrew translations
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── styles/            # CSS modules
│   ├── assets/            # Images and static files
│   ├── i18n.js            # i18next configuration
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🌍 Internationalization

The portfolio supports three languages with complete translations:

- **English (en)** - Default language
- **Russian (ru)** - Full translation
- **Hebrew (he)** - Full translation with RTL support

Language is automatically detected from browser settings or can be manually switched using flag buttons in the header.

## 🎨 Customization

### Adding New Projects

Edit `src/components/Projects.jsx`:

```javascript
{
  title: 'Project Name',
  descriptionKey: 'project_key',
  image: '',
  link: 'https://live-demo.com',
  github: 'https://github.com/user/repo',
  categories: ['featured', 'devops']
}
```

Add translations in `public/locales/{lang}/projects.json`

### Updating Skills

Edit `src/components/Skills.jsx` to modify tech stack and key skills arrays.

## 📊 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Bundle size: Optimized with code splitting

## 🔧 Deployment

### VPS Deployment

```bash
# Build the project
npm run build

# Transfer dist/ folder to VPS
scp -r dist/ user@your-vps:/var/www/portfolio

# Configure Nginx
# Point to /var/www/portfolio/dist
```

### Nginx Configuration Example

```nginx
server {
    listen 80;
    server_name sashagolden.xyz;
    root /var/www/portfolio/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Alex Goldenberg**

- Website: [sashagolden.xyz](https://sashagolden.xyz)
- GitHub: [@algoldenberg](https://github.com/algoldenberg)
- LinkedIn: [aleks-goldenberg](https://linkedin.com/in/aleks-goldenberg-841069256)
- Email: algoldenberga@gmail.com

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Internationalization via [i18next](https://www.i18next.com/)

---

*Portfolio showcasing DevOps engineering expertise and infrastructure automation projects.*
