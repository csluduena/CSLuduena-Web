import './index.css';
import { initRouter } from './router.js';
import { setupNavbar } from './components/Navbar.js';
import { setupFooter } from './components/Footer.js';
import { setupI18n } from './i18n/config.js';

// Initialize circuit animation
function initCircuitAnimation() {
    const container = document.createElement('div');
    container.className = 'circuit-container';
    document.body.appendChild(container);

    // Create cursor glow
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        // Update cursor glow
        cursorGlow.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;

        // Create circuit effect occasionally
        if (Math.random() < 0.1) {
            const line = document.createElement('div');
            line.className = 'circuit-line';
            
            // Random position near cursor
            const x = e.clientX + (Math.random() - 0.5) * 100;
            const y = e.clientY + (Math.random() - 0.5) * 100;
            
            line.style.left = `${x}px`;
            line.style.top = `${y}px`;
            line.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            container.appendChild(line);

            // Animate
            requestAnimationFrame(() => {
                line.style.opacity = '0.5';
                line.style.width = '200px';
            });

            // Create circuit dot
            const dot = document.createElement('div');
            dot.className = 'circuit-dot';
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
            container.appendChild(dot);

            requestAnimationFrame(() => {
                dot.style.opacity = '1';
            });

            // Cleanup
            setTimeout(() => {
                line.style.opacity = '0';
                dot.style.opacity = '0';
                setTimeout(() => {
                    line.remove();
                    dot.remove();
                }, 500);
            }, 1000);
        }
    });

    // Clean old elements periodically
    setInterval(() => {
        const elements = container.children;
        if (elements.length > 50) {
            container.innerHTML = '';
        }
    }, 5000);
}

// Initialize i18n
setupI18n().then(() => {
    // Setup components
    setupNavbar();
    setupFooter();
    
    // Initialize router
    initRouter();

    // Initialize circuit animation
    initCircuitAnimation();

    // Listen for language changes
    document.addEventListener('languageChanged', (event) => {
        const currentPath = window.location.pathname;
        // Force re-render of current page
        window.history.pushState({}, '', currentPath);
        const popStateEvent = new PopStateEvent('popstate');
        window.dispatchEvent(popStateEvent);
    });
});