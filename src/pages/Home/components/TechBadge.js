export function createTechBadge(name) {
    const badge = document.createElement('span');
    badge.className = 'inline-block bg-dark-400 text-primary-300 px-3 py-1 rounded-full text-sm font-medium transform transition-transform hover:scale-105';
    badge.textContent = name;
    return badge;
}