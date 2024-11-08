import { t } from '../../i18n/config.js';
import { createTimeline } from './components/Timeline.js';

export function renderExperience(container) {
    const main = document.createElement('main');
    main.className = 'pt-24 pb-16';

    const wrapper = document.createElement('div');
    wrapper.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

    const header = document.createElement('div');
    header.className = 'text-center mb-16 opacity-0 transform translate-y-4';
    header.innerHTML = `
        <h1 class="text-4xl font-bold text-white mb-4">
            ${t('experience.title')}
        </h1>
        <p class="text-xl text-gray-300">
            ${t('experience.subtitle')}
        </p>
    `;

    // Animate header
    setTimeout(() => {
        header.style.transition = 'all 0.8s ease-out';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);

    wrapper.appendChild(header);
    wrapper.appendChild(createTimeline());
    main.appendChild(wrapper);
    container.appendChild(main);
}