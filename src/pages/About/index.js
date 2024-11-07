import { t } from '../../i18n/config.js';
import { createTimeline } from './components/Timeline.js';

export function renderAbout(container) {
    const main = document.createElement('main');
    main.className = 'pt-24 pb-16';

    const wrapper = document.createElement('div');
    wrapper.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

    // Profile Section
    const profileSection = document.createElement('div');
    profileSection.className = 'text-center mb-16 opacity-0 transform translate-y-4';
    profileSection.innerHTML = `
        <div class="mb-8">
            <img
                src="/src/assets/profile.jpg"
                alt="Carlos Sebastian Ludueña"
                class="rounded-full mx-auto object-cover border-4 border-primary-500"
                style="width: 19rem; height: 19rem"
            />
        </div>
        <h1 class="text-4xl font-bold text-white mb-4">
            ${t('about.intro')}
        </h1>
    `;

    // Animate profile section
    setTimeout(() => {
        profileSection.style.transition = 'all 0.8s ease-out';
        profileSection.style.opacity = '1';
        profileSection.style.transform = 'translateY(0)';
    }, 100);

    wrapper.appendChild(profileSection);
    wrapper.appendChild(createTimeline());
    main.appendChild(wrapper);
    container.appendChild(main);
}