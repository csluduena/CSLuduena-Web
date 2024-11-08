import { t, changeLanguage } from '../i18n/config.js';
import i18next from 'i18next';

export function setupNavbar() {
    const navbar = document.getElementById('navbar');
    
    function renderNavbar() {
        navbar.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex-shrink-0">
                        <a href="/" data-link class="text-primary-500 text-xl font-bold hover:text-primary-400 transition-colors">CSLuduena</a>
                    </div>

                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a href="/" data-link class="text-gray-300 hover:text-primary-400 px-3 py-2 transition-colors">${t('nav.home')}</a>
                            <a href="/experience" data-link class="text-gray-300 hover:text-primary-400 px-3 py-2 transition-colors">${t('nav.experience')}</a>
                            <a href="/about" data-link class="text-gray-300 hover:text-primary-400 px-3 py-2 transition-colors">${t('nav.about')}</a>
                            <a href="/portfolio" data-link class="text-gray-300 hover:text-primary-400 px-3 py-2 transition-colors">${t('nav.portfolio')}</a>
                            <a href="/contact" data-link class="text-gray-300 hover:text-primary-400 px-3 py-2 transition-colors">${t('nav.contact')}</a>
                            <button id="langToggle" class="text-gray-300 hover:text-primary-400 px-3 py-2 transition-colors">
                                ${i18next.language === 'en' ? 'ES' : 'EN'}
                            </button>
                        </div>
                    </div>

                    <div class="md:hidden">
                        <button id="mobileMenuBtn" class="text-gray-300 hover:text-white">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div id="mobileMenu" class="hidden md:hidden bg-dark-300">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="/" data-link class="text-gray-300 hover:text-primary-400 block px-3 py-2 transition-colors">${t('nav.home')}</a>
                    <a href="/experience" data-link class="text-gray-300 hover:text-primary-400 block px-3 py-2 transition-colors">${t('nav.experience')}</a>
                    <a href="/about" data-link class="text-gray-300 hover:text-primary-400 block px-3 py-2 transition-colors">${t('nav.about')}</a>
                    <a href="/portfolio" data-link class="text-gray-300 hover:text-primary-400 block px-3 py-2 transition-colors">${t('nav.portfolio')}</a>
                    <a href="/contact" data-link class="text-gray-300 hover:text-primary-400 block px-3 py-2 transition-colors">${t('nav.contact')}</a>
                    <button id="mobileLangToggle" class="text-gray-300 hover:text-primary-400 block px-3 py-2 w-full text-left transition-colors">
                        ${i18next.language === 'en' ? 'ES' : 'EN'}
                    </button>
                </div>
            </div>
        `;

        // Event Listeners
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const langToggle = document.getElementById('langToggle');
        const mobileLangToggle = document.getElementById('mobileLangToggle');

        mobileMenuBtn?.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        const handleLanguageChange = () => {
            const newLang = i18next.language === 'en' ? 'es' : 'en';
            changeLanguage(newLang).then(() => {
                renderNavbar();
                // Re-render the current page
                const event = new CustomEvent('languageChanged', { detail: { language: newLang } });
                document.dispatchEvent(event);
            });
        };

        langToggle?.addEventListener('click', handleLanguageChange);
        mobileLangToggle?.addEventListener('click', handleLanguageChange);
    }

    renderNavbar();

    // Listen for language changes
    document.addEventListener('languageChanged', () => {
        renderNavbar();
    });
}
