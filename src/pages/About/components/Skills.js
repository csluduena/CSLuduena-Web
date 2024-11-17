import { t } from '../../../i18n/config.js';
import { createSkillCard } from '../../Home/components/SkillCard.js';
import { createTechBadge } from '../../Home/components/TechBadge.js';

function createSkillCardWithHover(title, description, children = []) {
    const card = document.createElement('div');
    card.className = 'bg-dark-300/80 backdrop-blur-sm rounded-lg p-6 shadow-lg opacity-0 transform translate-y-4 hover:shadow-primary-500/20 transition-all duration-300';
    
    card.innerHTML = `
        <h3 class="text-2xl font-bold text-primary-400 mb-4">${title}</h3>
        ${description ? `<div class="text-gray-300 mb-6">${description}</div>` : ''}
        <div class="flex flex-wrap gap-2"></div>
    `;

    if (children.length > 0) {
        const container = card.querySelector('.flex');
        children.forEach(child => container.appendChild(child));
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card.style.transition = 'all 0.8s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(card);

    return card;
}

export function createSkills() {
    const section = document.createElement('section');
    section.className = 'py-20 relative overflow-hidden';

    const container = document.createElement('div');
    container.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10';

    const content = document.createElement('div');
    content.className = 'space-y-16';

    const technicalSkills = document.createElement('div');
    technicalSkills.className = 'grid grid-cols-1 md:grid-cols-2 gap-8';

    const frontendTechnologies = t('skills.frontend.technologies', { returnObjects: true }) || [];
    const backendTechnologies = t('skills.backend.technologies', { returnObjects: true }) || [];

    const frontendCard = createSkillCard(
        t('skills.frontend.title'),
        t('skills.frontend.description'),
        Array.isArray(frontendTechnologies) ? frontendTechnologies.map(createTechBadge) : []
    );

    const backendCard = createSkillCard(
        t('skills.backend.title'),
        t('skills.backend.description'),
        Array.isArray(backendTechnologies) ? backendTechnologies.map(createTechBadge) : []
    );

    technicalSkills.appendChild(frontendCard);
    technicalSkills.appendChild(backendCard);

    const professionalSkills = document.createElement('div');
    professionalSkills.className = 'grid grid-cols-1 md:grid-cols-3 gap-8 mt-8';

    const adaptableCard = createSkillCard(t('skills.adaptable.title'), t('skills.adaptable.description'));
    const supportiveCard = createSkillCard(t('skills.supportive.title'), t('skills.supportive.description'));
    const experienceCard = createSkillCard(t('skills.experience.title'), t('skills.experience.description'));

    professionalSkills.appendChild(adaptableCard);
    professionalSkills.appendChild(supportiveCard);
    professionalSkills.appendChild(experienceCard);

    const skillsSections = document.createElement('div');
    skillsSections.className = 'grid grid-cols-1 md:grid-cols-2 gap-8 mt-8';

    const individualSkills = createSkillCardWithHover(
        t('skills.individual.title'),
        t('skills.individual.items')
    );

    const teamworkSkills = createSkillCardWithHover(
        t('skills.teamwork.title'),
        t('skills.teamwork.items')
    );

    skillsSections.appendChild(individualSkills);
    skillsSections.appendChild(teamworkSkills);

    content.appendChild(technicalSkills);
    content.appendChild(professionalSkills);
    content.appendChild(skillsSections);

    container.appendChild(content);
    section.appendChild(container);

    return section;
}