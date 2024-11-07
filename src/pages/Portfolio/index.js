import { t } from '../../i18n/config.js';
import { createProjectCard } from './components/ProjectCard.js';

const projects = [
    {
        id: 'codercamp',
        title: 'CoderCamp',
        description: t('portfolio.projects.codercamp.description'),
        image: '/projects/codercamp.png',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        liveUrl: 'https://csluduena.github.io/codercamp/',
        githubUrl: 'https://github.com/csluduena/codercamp'
    },
    {
        id: 'viajesbsas',
        title: 'ViajesBsAs',
        description: t('portfolio.projects.viajesbsas.description'),
        image: '/projects/viajesbsas.png',
        technologies: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
        liveUrl: 'https://csluduena.github.io/ViajesBsAs-Web-Pages/',
        githubUrl: 'https://github.com/csluduena/ViajesBsAs-Web-Pages'
    },
    {
        id: 'guitarstore',
        title: 'Guitar Store',
        description: t('portfolio.projects.guitarstore.description'),
        image: '/projects/guitarstore.png',
        technologies: ['JavaScript', 'CSS'],
        liveUrl: 'https://guitarstore-react.netlify.app/',
        githubUrl: 'https://github.com/csluduena/guitar-store'
    },
    {
        id: 'javascript-project',
        title: 'JavaScript Project',
        description: t('portfolio.projects.javascript.description'),
        image: '/projects/javascript.png',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        liveUrl: 'https://csluduena.github.io/CoderHouse-DesarrolloFullStack-Javascript-Trabajo3/',
        githubUrl: 'https://github.com/csluduena/CoderHouse-DesarrolloFullStack-Javascript-Trabajo3'
    }
];

const hbmProject = {
    id: 'hbm',
    title: 'HB Models',
    description: t('portfolio.projects.hbm.description'),
    image: '/projects/hbmodels.png',
    technologies: ['JavaScript', 'PHP', 'MariaDB', 'phpMyAdmin', 'HTML', 'CSS'],
    platforms: t('portfolio.projects.hbm.platforms', { returnObjects: true }),
    liveUrl: 'https://hbmodels.com.ar/'
};

export function renderPortfolio(container) {
    container.innerHTML = '';

    const main = document.createElement('main');
    main.className = 'pt-24 pb-16 min-h-screen relative';

    // Add video background
    const videoBackground = document.createElement('div');
    videoBackground.className = 'absolute inset-0 overflow-hidden';
    videoBackground.innerHTML = `
        <video autoplay loop muted playsinline class="w-full h-full object-cover opacity-5">
            <source src="/src/assets/coding.mp4" type="video/mp4">
        </video>
    `;
    main.appendChild(videoBackground);

    const wrapper = document.createElement('div');
    wrapper.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10';

    // Featured Client Section
    const featuredSection = document.createElement('div');
    featuredSection.className = 'mb-20';
    featuredSection.innerHTML = `
        <h2 class="text-center text-4xl font-bold text-white mb-4">
            ${t('portfolio.title2')}
        </h2>
        <p class="text-center text-gray-400 mb-12">
            ${t('portfolio.subtitle2')}
        </p>
    `;

    const featuredCard = document.createElement('div');
    featuredCard.className = 'max-w-5xl mx-auto';
    featuredCard.appendChild(createProjectCard(hbmProject));
    featuredSection.appendChild(featuredCard);

    // Projects Section
    const projectsSection = document.createElement('div');
    projectsSection.className = 'mt-20';
    projectsSection.innerHTML = `
        <h2 class="text-center text-4xl font-bold text-white mb-4">
            ${t('portfolio.title')}
        </h2>
        <p class="text-center text-gray-400 mb-12">
            ${t('portfolio.subtitle')}
        </p>
    `;

    const projectsGrid = document.createElement('div');
    projectsGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8';
    projects.forEach(project => {
        projectsGrid.appendChild(createProjectCard(project));
    });
    projectsSection.appendChild(projectsGrid);

    wrapper.appendChild(featuredSection);
    wrapper.appendChild(projectsSection);
    main.appendChild(wrapper);
    container.appendChild(main);

    // Re-render when language changes
    document.addEventListener('languageChanged', () => {
        renderPortfolio(container);
    });
}