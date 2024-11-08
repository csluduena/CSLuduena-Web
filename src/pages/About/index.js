import { t } from '../../i18n/config.js';
import { createSkills } from './components/Skills.js';

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

    try {
        const skillsSection = createSkills();
        wrapper.appendChild(skillsSection);
    } catch (error) {
        console.error('Error creating skills section:', error);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'text-red-500 text-center mt-4';
        errorMessage.textContent = 'An error occurred while loading skills. Please try again later.';
        wrapper.appendChild(errorMessage);
    }

    // Individual Skills Section
    const individualSkills = document.createElement('div');
    individualSkills.className = 'mt-16';
    const individualItems = t('skills.individual.items', { returnObjects: true });
    // individualSkills.innerHTML = `
    //     <h2 class="text-3xl font-bold text-white mb-4">${t('skills.individual.title')}</h2>
    //     <ul class="list-disc list-inside text-gray-300">
    //         ${Array.isArray(individualItems) ? individualItems.map(item => `<li>${item}</li>`).join('') : ''}
    //     </ul>
    // `;

    // Teamwork Skills Section
    const teamworkSkills = document.createElement('div');
    teamworkSkills.className = 'mt-16';
    const teamworkItems = t('skills.teamwork.items', { returnObjects: true });
    // teamworkSkills.innerHTML = `
    //     <h2 class="text-3xl font-bold text-white mb-4">${t('skills.teamwork.title')}</h2>
    //     <ul class="list-disc list-inside text-gray-300">
    //         ${Array.isArray(teamworkItems) ? teamworkItems.map(item => `<li>${item}</li>`).join('') : ''}
    //     </ul>
    // `;

    wrapper.appendChild(individualSkills);
    wrapper.appendChild(teamworkSkills);
    
    main.appendChild(wrapper);
    container.appendChild(main);
}