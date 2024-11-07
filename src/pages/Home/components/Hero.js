import { t } from '../../../i18n/config.js';

export function createHero() {
    const section = document.createElement('section');
    section.className = 'min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden';
    
    section.innerHTML = `
        <div class="absolute inset-0 overflow-hidden">
            <video autoplay loop muted playsinline class="absolute right-0 top-0 w-full h-full object-cover" style="opacity:0.13">
                <source src="/src/assets/coding.mp4" type="video/mp4">
            </video>
        <div class="absolute inset-0 bg-gradient-to-b "></div>
        </div>
        <div class="text-center opacity-0 transform translate-y-4 relative z-10" data-animate>
            <h1 class="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text">
                CSLuduena
            </h1>
            <h2 class="text-2xl md:text-3xl text-gray-300 mb-4">
                ${t('hero.role')}
            </h2>
            <p class="text-lg md:text-xl text-gray-400">
                ${t('hero.technologies')}
            </p>
        </div>
    `;

    // Animation
    setTimeout(() => {
        const animateEl = section.querySelector('[data-animate]');
        animateEl.style.transition = 'all 0.8s ease-out';
        animateEl.style.opacity = '1';
        animateEl.style.transform = 'translateY(0)';
    }, 100);

    return section;
}