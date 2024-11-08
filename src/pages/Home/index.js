import { t } from '../../i18n/config.js';
import { createHero } from './components/Hero.js';

export function renderHome(container) {
    const main = document.createElement('main');
    main.className = 'h-[calc(100vh-4rem)] flex flex-col'; // Subtract navbar height
    
    const hero = createHero();
    hero.className = 'flex-grow flex items-center justify-center';
    
    main.appendChild(hero);
    
    container.appendChild(main);
}