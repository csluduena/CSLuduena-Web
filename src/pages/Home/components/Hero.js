import { t } from '../../../i18n/config.js';

export function createHero() {
    const section = document.createElement('section');
    section.className = 'min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden';
    
    section.innerHTML = `
        <div class="absolute inset-0 overflow-hidden">
            <video autoplay loop muted playsinline class="absolute right-0 top-0 w-full h-full object-cover" style="opacity:0.13">
                <source src="assets/coding.mp4" type="video/mp4">
            </video>
        <div class="absolute inset-0 bg-gradient-to-b "></div>
        </div>
        <div class="text-center opacity-0 transform translate-y-4 relative z-10" data-animate>
            <span class="underline-dynamic top-line" style="margin-top:-4rem; opacity:0"><span class="underline-dynamic top-line" style="margin-top:12px; opacity:0.44;"></span></span>
            <h1 class="font-bold mb-5 bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text hero-title" style="font-size: 7rem;">
                CSLuduena
            </h1>
            <span class="underline-dynamic bottom-line" style="margin-bottom:-4rem; opacity:0"><span class="underline-dynamic bottom-line" style="margin-bottom:12px; opacity:0.44"></span></span>
            <h2 class="text-2xl md:text-4xl text-gray-400 mb-12">
                ${t('hero.role')}
            </h2>
            <p class="text-xs md:text-lg text-gray-500">
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
