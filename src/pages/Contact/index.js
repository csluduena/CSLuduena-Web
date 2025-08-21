import { t } from '../../i18n/config.js';
import { createContactForm } from './components/ContactForm.js';

export function renderContact(container) {
    const main = document.createElement('main');
    main.className = 'h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4'; // Subtract navbar height

    const wrapper = document.createElement('div');
    wrapper.className = 'max-w-3xl w-full';

    const header = document.createElement('div');
    header.className = 'text-center mb-8 opacity-0 transform translate-y-4'; // Reduced margin bottom
    header.innerHTML = `
        <h1 class="text-4xl font-bold text-white mb-2">
            ${t('contact.title')}
        </h1>
        <p class="text-xl text-gray-300">
            ${t('contact.subtitle')}
        </p>
    `;

    // Ajuste responsive solo después de crear wrapper y header
    if (window.innerWidth < 768) {
        main.style.minHeight = '100vh';
        main.style.justifyContent = 'flex-start';
        wrapper.style.marginTop = '4rem';
        wrapper.style.width = '90vw';
        wrapper.style.maxWidth = '90vw';
        wrapper.style.marginLeft = '5vw';
        wrapper.style.marginRight = '5vw';
        wrapper.style.marginBottom = '4rem'; // margen inferior mayor para separar bien del footer
        header.style.marginBottom = '1.5rem';
        header.style.padding = '0 0.5rem';
    }

    // Animate header
    setTimeout(() => {
        header.style.transition = 'all 0.8s ease-out';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);

    wrapper.appendChild(header);
    wrapper.appendChild(createContactForm());
    main.appendChild(wrapper);
    container.appendChild(main);
}