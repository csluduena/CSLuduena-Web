import { t } from '../../i18n/config.js';
import { createHero } from './components/Hero.js';
import { createSkills } from './components/Skills.js';

export function renderHome(container) {
    const main = document.createElement('main');
    main.className = 'pt-16';
    
    main.appendChild(createHero());
    main.appendChild(createSkills());
    
    container.appendChild(main);
}

