import { renderHome } from './pages/Home/index.js';
import { renderExperience } from './pages/Experience/index.js';
import { renderAbout } from './pages/About/index.js';
import { renderPortfolio } from './pages/Portfolio/index.js';
import { renderContact } from './pages/Contact/index.js';

const routes = {
    '/': renderHome,
    '/experience': renderExperience,
    '/about': renderAbout,
    '/portfolio': renderPortfolio,
    '/contact': renderContact
};

export function initRouter() {
    function handleRoute(path = window.location.pathname) {
        const renderer = routes[path] || routes['/'];
        const mainContent = document.getElementById('main-content');
    
        if (mainContent) {
            mainContent.innerHTML = '';
            try {
                renderer(mainContent);
            } catch (error) {
                console.error('Error rendering page:', error);
            }
        }

        // Update active nav link
        document.querySelectorAll('[data-link]').forEach(link => {
            const href = link.getAttribute('href');
            if (href === path) {
                link.classList.add('text-primary-400');
                link.classList.remove('text-gray-300');
            } else {
                link.classList.remove('text-primary-400');
                link.classList.add('text-gray-300');
            }
        });
    }

    // Handle navigation
    window.addEventListener('popstate', () => handleRoute());
    document.addEventListener('click', (e) => {
        const link = e.target.closest('[data-link]');
        if (link) {
            e.preventDefault();
            const href = link.getAttribute('href');
            window.history.pushState({}, '', href);
            handleRoute(href);
        }
    });

    // Handle language changes
    document.addEventListener('languageChanged', () => {
        const currentPath = window.location.pathname;
        handleRoute(currentPath);
    });

    // Initial route
    handleRoute();
}