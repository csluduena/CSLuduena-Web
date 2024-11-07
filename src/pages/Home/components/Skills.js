import { t } from '../../../i18n/config.js';
import { createSkillCard } from './SkillCard.js';
import { createTechBadge } from './TechBadge.js';

export function createSkills() {
    const section = document.createElement('section');
    section.className = 'py-20 relative overflow-hidden';

    // Video background with overlay
    section.innerHTML = `
        <div class="absolute inset-0 overflow-hidden">
            
            <div class="absolute inset-0" style="background-color:#05192129"></div>
        </div>
    `;

    const container = document.createElement('div');
    container.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10';

    const content = document.createElement('div');
    content.className = 'space-y-16';

    // Technical Skills
    const technicalSkills = document.createElement('div');
    technicalSkills.className = 'grid grid-cols-1 md:grid-cols-2 gap-8';

    // Get technologies arrays from translations
    const frontendTechnologies = t('skills.frontend.technologies', { returnObjects: true }) || [];
    const backendTechnologies = t('skills.backend.technologies', { returnObjects: true }) || [];

    // Frontend Card
    const frontendCard = createSkillCard(
        t('skills.frontend.title'),
        t('skills.frontend.description'),
        Array.isArray(frontendTechnologies) ? frontendTechnologies.map(createTechBadge) : []
    );

    // Backend Card
    const backendCard = createSkillCard(
        t('skills.backend.title'),
        t('skills.backend.description'),
        Array.isArray(backendTechnologies) ? backendTechnologies.map(createTechBadge) : []
    );

    technicalSkills.appendChild(frontendCard);
    technicalSkills.appendChild(backendCard);

    // Professional Skills
    const professionalSkills = document.createElement('div');
    professionalSkills.className = 'grid grid-cols-1 md:grid-cols-3 gap-8';

    const adaptableCard = createSkillCard(t('skills.adaptable.title'), t('skills.adaptable.description'));
    const supportiveCard = createSkillCard(t('skills.supportive.title'), t('skills.supportive.description'));
    const experienceCard = createSkillCard(t('skills.experience.title'), t('skills.experience.description'));

    professionalSkills.appendChild(adaptableCard);
    professionalSkills.appendChild(supportiveCard);
    professionalSkills.appendChild(experienceCard);

    content.appendChild(technicalSkills);
    content.appendChild(professionalSkills);
    container.appendChild(content);
    section.appendChild(container);

    return section;
}