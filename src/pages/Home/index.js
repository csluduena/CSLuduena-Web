import { t } from '../../i18n/config.js';
import { createHero } from './components/Hero.js';

export function renderHome(container) {
    const main = document.createElement('main');
    main.className = 'h-screen flex flex-col md:overflow-hidden'; // Prevent vertical scroll on desktop
    if (window.innerWidth < 768) {
        main.style.height = '100vh';
        main.style.overflow = 'hidden';
        main.style.display = 'flex';
        main.style.flexDirection = 'column';
        main.style.justifyContent = 'space-between';
    }
    
    const hero = createHero();
    hero.className = 'flex-grow flex items-center justify-center';
    
    main.appendChild(hero);
    
    container.appendChild(main);
}