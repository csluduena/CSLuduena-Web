export function createSkillCard(title, description, children = []) {
    const card = document.createElement('div');
    card.className = 'bg-dark-300/80 backdrop-blur-sm rounded-lg p-6 shadow-lg opacity-0 transform translate-y-4 hover:shadow-primary-500/20 transition-all duration-300';
    
    card.innerHTML = `
        <h3 class="text-2xl font-bold text-primary-400 mb-4">${title}</h3>
        ${description ? `<p class="text-gray-300 mb-6">${description}</p>` : ''}
        <div class="flex flex-wrap gap-2"></div>
    `;

    if (children.length > 0) {
        const container = card.querySelector('.flex');
        children.forEach(child => container.appendChild(child));
    }

    // Animation
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