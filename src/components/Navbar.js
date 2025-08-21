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
                            
                            <div class="relative inline-block text-left" id="cvDropdown">
                                <button class="text-gray-300 hover:text-primary-400 px-3 py-2 transition-colors" id="cvButton">
                                    ${t('nav.downloadCV')}
                                </button>
                                <div class="absolute left-1/2 transform -translate-x-1/2 mt-1 w-32 bg-dark-300 rounded-md shadow-lg py-1 opacity-0 invisible transition-all duration-200" id="cvMenu">
                                    <a href="https://drive.google.com/file/d/1_wT8ROJ6Uam5XVejZwruAIIlMqPUCMTG/view" target="_blank" class="block px-2 py-1 text-sm text-center text-gray-300 hover:text-primary-400 hover:bg-dark-400">
                                        CV Español
                                    </a>
                                    <a href="https://drive.google.com/file/d/1MXc0kBYjtLNGRbpbu931gqWyFzmq0Fzl/view" target="_blank" class="block px-2 py-1 text-sm text-center text-gray-300 hover:text-primary-400 hover:bg-dark-400">
                                        CV English
                                    </a>
                                </div>
                            </div>

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
                    
                    <div class="border-t border-gray-700 my-2"></div>
                    
                    <a href="https://drive.google.com/file/d/1_wT8ROJ6Uam5XVejZwruAIIlMqPUCMTG/view" target="_blank" class="text-gray-300 hover:text-primary-400 block px-3 py-2 transition-colors">CV Español</a>
                    <a href="https://drive.google.com/file/d/1MXc0kBYjtLNGRbpbu931gqWyFzmq0Fzl/view" target="_blank" class="text-gray-300 hover:text-primary-400 block px-3 py-2 transition-colors">CV English</a>
                    
                    <div class="border-t border-gray-700 my-2"></div>
                    
                    <button id="mobileLangToggle" class="text-gray-300 hover:text-primary-400 block px-3 py-2 w-full text-left transition-colors">
                        ${i18next.language === 'en' ? 'ES' : 'EN'}
                    </button>
                </div>
            </div>
        `;

        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const langToggle = document.getElementById('langToggle');
        const mobileLangToggle = document.getElementById('mobileLangToggle');
        const cvDropdown = document.getElementById('cvDropdown');
        const cvButton = document.getElementById('cvButton');
        const cvMenu = document.getElementById('cvMenu');

        let isClickOpen = false;
        let closeTimeout;

        const showMenu = () => {
            cvMenu.classList.remove('invisible', 'opacity-0');
            cvMenu.classList.add('opacity-100');
        };

        const hideMenu = () => {
            cvMenu.classList.remove('opacity-100');
            cvMenu.classList.add('invisible', 'opacity-0');
        };

        const handleMouseEnter = () => {
            if (!isClickOpen) {
                clearTimeout(closeTimeout);
                showMenu();
            }
        };

        const handleMouseLeave = () => {
            if (!isClickOpen) {
                clearTimeout(closeTimeout);
                closeTimeout = setTimeout(() => {
                    if (!cvMenu.matches(':hover')) {
                        hideMenu();
                    }
                }, 1000);
            }
        };

        cvButton.addEventListener('click', (e) => {
            e.stopPropagation();
            isClickOpen = !isClickOpen;
            if (isClickOpen) {
                showMenu();
            } else {
                hideMenu();
            }
        });

        cvDropdown.addEventListener('mouseenter', handleMouseEnter);
        cvDropdown.addEventListener('mouseleave', handleMouseLeave);

        cvMenu.addEventListener('mouseenter', () => {
            if (!isClickOpen) {
                clearTimeout(closeTimeout);
            }
        });

        cvMenu.addEventListener('mouseleave', () => {
            if (!isClickOpen) {
                closeTimeout = setTimeout(hideMenu, 1000);
            }
        });

        document.addEventListener('click', (e) => {
            if (!cvDropdown.contains(e.target) && isClickOpen) {
                isClickOpen = false;
                hideMenu();
            }
        });

        mobileMenuBtn?.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Cerrar menú mobile al hacer clic en cualquier enlace o cambiar idioma
        mobileMenu.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('click', () => {
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        // Mejorar visual del menú mobile (solo padding y separación, sin color ni border-radius ni blur ni box-shadow)
        if (window.innerWidth < 768) {
            mobileMenu.style.background = '';
            mobileMenu.style.backdropFilter = '';
            mobileMenu.style.width = '';
            mobileMenu.style.left = '';
            mobileMenu.style.right = '';
            mobileMenu.style.borderRadius = '';
            mobileMenu.style.boxShadow = '';
            mobileMenu.style.position = '';
            mobileMenu.style.top = '';
            mobileMenu.style.zIndex = '';
            mobileMenu.classList.add('bg-dark-300');
            mobileMenu.querySelectorAll('a, button').forEach(el => {
                el.style.padding = '1rem 1.5rem';
                el.style.fontSize = '1.1rem';
                el.style.margin = '0.25rem 0';
                el.style.display = 'block';
            });
        }

        const handleLanguageChange = () => {
            const newLang = i18next.language === 'en' ? 'es' : 'en';
            const currentPath = window.location.pathname;
            
            changeLanguage(newLang).then(() => {
                renderNavbar();
                window.history.pushState({}, '', currentPath);
                const event = new CustomEvent('languageChanged', { 
                    detail: { 
                        language: newLang,
                        currentPath: currentPath 
                    }
                });
                document.dispatchEvent(event);
            });
        };

        langToggle?.addEventListener('click', handleLanguageChange);
        mobileLangToggle?.addEventListener('click', handleLanguageChange);
    }

    renderNavbar();

    document.addEventListener('languageChanged', () => {
        renderNavbar();
    });
}