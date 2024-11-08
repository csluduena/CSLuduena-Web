export function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'bg-dark-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 opacity-0 transform translate-y-4';

    const defaultImage = './projects/javascript.png';

    card.innerHTML = `
        <div class="relative aspect-video group">
            <img
                src="${project.image || defaultImage}"
                alt="${project.title}"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onerror="this.src='${defaultImage}'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-0 left-0 right-0 p-4">
                    <p class="text-white text-sm">Click to view project</p>
                </div>
            </div>
        </div>

        <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
            <p class="text-gray-300 mb-4">${project.description}</p>

            <div class="flex flex-wrap gap-2 mb-4">
                ${project.technologies.map(tech => `
                    <span class="text-sm text-primary-300 bg-dark-400 px-2 py-1 rounded">
                        ${tech}
                    </span>
                `).join('')}
            </div>

            ${Array.isArray(project.platforms) && project.platforms.length ? `
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.platforms.map(platform => `
                        <span class="text-sm text-gray-300 bg-dark-400 px-2 py-1 rounded">
                            ${platform}
                        </span>
                    `).join('')}
                </div>
            ` : ''}

            <div class="flex gap-4 mt-4">
                ${project.githubUrl ? `
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
                       class="text-gray-300 hover:text-primary-400 transition-colors">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                    </a>
                ` : ''}
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" 
                   class="text-gray-300 hover:text-primary-400 transition-colors">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                </a>
            </div>
        </div>
    `;

    // Make the entire card clickable to visit the live URL
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
        // Don't trigger if clicking on a link
        if (e.target.closest('a')) return;
        window.open(project.liveUrl, '_blank');
    });

    // Animation
    setTimeout(() => {
        card.style.transition = 'all 0.8s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);

    return card;
}
