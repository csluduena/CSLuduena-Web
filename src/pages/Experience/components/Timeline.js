import { t } from '../../../i18n/config.js';

export function createTimeline() {
    const timeline = document.createElement('div');
    timeline.className = 'relative';

    // Timeline line
    const line = document.createElement('div');
    line.className = 'absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-500';
    timeline.appendChild(line);

    const experiences = [
        {
            id: 'indie',
            date: t('about.experience.indie.period'),
            title: t('about.experience.indie.title'),
            company: t('about.experience.indie.company'),
            description: t('about.experience.indie.description')
        },
        {
            id: 'freelance',
            date: t('about.experience.freelance.period'),
            title: t('about.experience.freelance.title'),
            company: t('about.experience.freelance.company'),
            description: t('about.experience.freelance.description')
        },
        {
            id: 'st-computacion',
            date: t('about.experience.st-computacion.period'),
            title: t('about.experience.st-computacion.title'),
            company: t('about.experience.st-computacion.company'),
            description: t('about.experience.st-computacion.description')
        },
        {
            id: 'ep-soluciones',
            date: t('about.experience.ep-soluciones.period'),
            title: t('about.experience.ep-soluciones.title'),
            company: t('about.experience.ep-soluciones.company'),
            description: t('about.experience.ep-soluciones.description')
        }
    ];

    experiences.forEach((experience, index) => {
        const item = createTimelineItem(experience, index);
        timeline.appendChild(item);
    });

    return timeline;
}

function createTimelineItem(experience, index) {
    const item = document.createElement('div');
    
    // Detectar si el ancho de pantalla es menor a 699px
    const isSmallScreen = window.innerWidth < 699;

    // Cambiar las clases y estilo según el tamaño de la pantalla
    item.className = isSmallScreen
        ? 'relative flex flex-col items-center mb-12'
        : `relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`;
    
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';

    item.innerHTML = `
        <div class="${isSmallScreen ? 'w-full text-center' : 'w-5/12'} ${!isSmallScreen && index % 2 === 0 ? 'text-right pr-8' : ''} ${!isSmallScreen && index % 2 !== 0 ? 'text-left pl-8' : ''}">
            <div class="bg-dark-300 p-6 rounded-lg shadow-lg">
                <span class="text-primary-400 font-semibold">
                    ${experience.date}
                </span>
                <h3 class="text-xl font-bold text-white mt-2">
                    ${experience.title}
                </h3>
                <h4 class="text-gray-400 font-medium">
                    ${experience.company}
                </h4>
                <p class="text-gray-300 mt-2">
                    ${experience.description}
                </p>
            </div>
        </div>
        <div class="absolute ${isSmallScreen ? 'top-0 left-1/2 transform -translate-x-1/2' : 'left-1/2 transform -translate-x-1/2'} w-4 h-4 rounded-full bg-primary-500"></div>
    `;

    // Animation using Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                item.style.transition = 'all 0.8s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(item);

    return item;
}
