export function createScrollToTop() {
    const button = document.createElement('button');
    button.className = 'fixed bottom-8 right-8 bg-primary-500 text-white p-3 rounded-full shadow-lg opacity-0 transition-all duration-300 hover:bg-primary-600 transform translate-y-10';
    button.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
    `;
    button.style.zIndex = '50';
    
    // Show/hide button based on scroll position
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        } else {
            button.style.opacity = '0';
            button.style.transform = 'translateY(10px)';
        }
    };

    // Scroll to top when clicked
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    return button;
}