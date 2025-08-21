import { t } from '../../i18n/config.js';
import { createSkills } from './components/Skills.js';
import { createScrollToTop } from '../../components/ScrollToTop.js';

export function renderAbout(container) {
    const main = document.createElement('main');
    main.className = 'pt-24 pb-16';

    const wrapper = document.createElement('div');
    wrapper.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

    const profileSection = document.createElement('div');
    profileSection.className = 'text-center mb-16 opacity-0 transform translate-y-4';
    profileSection.innerHTML = `
        <div class="mb-8">
            <img src="/src/assets/profile.jpg" alt="Carlos Sebastian Ludueña" class="rounded-full mx-auto object-cover border-4 border-primary-500" style="width: 19rem; height: 19rem; max-width: 90vw; max-height: 90vw; ${window.innerWidth < 768 ? 'width: 8.5rem; height: 8.5rem;' : ''}" loading="lazy"> 
        
        </div>
        <h1 class="text-4xl font-bold text-white mb-4">
            ${t('about.intro')}
        </h1>
    `;

    setTimeout(() => {
        profileSection.style.transition = 'all 0.8s ease-out';
        profileSection.style.opacity = '1';
        profileSection.style.transform = 'translateY(0)';
    }, 100);

    wrapper.appendChild(profileSection);

    try {
        const skillsSection = createSkills();
        wrapper.appendChild(skillsSection);
        // Achicar recuadros de skills en mobile (después de agregarlos)
        if (window.innerWidth < 768) {
            wrapper.style.padding = '0 0.5rem';
            // Seleccionar todos los elementos con clases que contienen 'bg-dark-300' (incluyendo variantes como 'bg-dark-300/80')
            const cards = Array.from(wrapper.querySelectorAll('[class*="bg-dark-300"]'));
            cards.forEach(card => {
                card.style.padding = '1rem';
                card.style.fontSize = '0.95rem';
            });
        }
    } catch (error) {
        console.error('Error creating skills section:', error);
        const errorMessage = document.createElement('div');
        errorMessage.className = 'text-red-500 text-center mt-4';
        errorMessage.textContent = 'An error occurred while loading skills. Please try again later.';
        wrapper.appendChild(errorMessage);
    }

    main.appendChild(wrapper);
    
    // Add scroll to top button
    main.appendChild(createScrollToTop());
    
    container.appendChild(main);
}
