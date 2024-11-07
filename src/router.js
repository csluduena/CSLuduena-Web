import { renderHome } from './pages/Home/index.js';
import { renderAbout } from './pages/About/index.js';
import { renderPortfolio } from './pages/Portfolio/index.js';
import { renderContact } from './pages/Contact/index.js';

const routes = {
    '/': renderHome,
    '/about': renderAbout,
    '/portfolio': renderPortfolio,
    '/contact': renderContact
};

export function initRouter() {
    function handleRoute() {
        const path = window.location.pathname || '/';
        const renderer = routes[path] || routes['/'];
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = '';
        renderer(mainContent);

        // Update active nav link
        document.querySelectorAll('[data-link]').forEach(link => {
            if (link.getAttribute('href') === path) {
                link.classList.add('text-primary-400');
            } else {
                link.classList.remove('text-primary-400');
            }
        });
    }

    // Handle navigation
    window.addEventListener('popstate', handleRoute);
    document.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            window.history.pushState({}, '', href);
            handleRoute();
        }
    });

    // Initial route
    handleRoute();
}