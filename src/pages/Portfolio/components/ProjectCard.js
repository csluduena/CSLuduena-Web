import i18next from 'i18next';

export function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'bg-dark-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 opacity-0 transform translate-y-4';
    card.setAttribute('data-project-id', project.id);

    const defaultImage = './projects/javascript.png';
    let images = []; // Definir images en el scope de la función

    // Función para obtener la traducción del nombre de la imagen (disponible globalmente)
    const getImageDesc = (imageSrc) => {
        // Extraer el número del archivo (ej: "1- Página principal.png" -> "1")
        const fileName = imageSrc.split('/').pop(); // Obtener solo el nombre del archivo
        const match = fileName.match(/^(\d+)-/); // Extraer el número al inicio
        
        if (match) {
            const key = match[1]; // Solo el número
            // Usar el sistema de traducción existente
            if (i18next && i18next.t) {
                return i18next.t(`portfolio.capitansaltoImages.${key}`);
            }
        }
        
        // Fallback: devolver el nombre sin extensión
        const nameWithoutExt = fileName.replace(/\.(png|gif|jpg|jpeg)$/i, '');
        return nameWithoutExt;
    };

    // Si es Capitán Salto, crear carrusel
    if (project.id === 'capitansalto') {
        
        images = [
            { src: '/projects/cp/1- Página principal.png', desc: getImageDesc('/projects/cp/1- Página principal.png') },
            { src: '/projects/cp/2- Sección de tickets.gif', desc: getImageDesc('/projects/cp/2- Sección de tickets.gif') },
            { src: '/projects/cp/3- Panel de administración.png', desc: getImageDesc('/projects/cp/3- Panel de administración.png') },
            { src: '/projects/cp/4- Sistema membresías.png', desc: getImageDesc('/projects/cp/4- Sistema membresías.png') },
            { src: '/projects/cp/5- Sistema horarios para agenda.png', desc: getImageDesc('/projects/cp/5- Sistema horarios para agenda.png') },
            { src: '/projects/cp/6- Sistema de agenda para Cumpleaños y Salto Libres (Eventos).png', desc: getImageDesc('/projects/cp/6- Sistema de agenda para Cumpleaños y Salto Libres (Eventos).png') },
            { src: '/projects/cp/7- Sistema de ventas.png', desc: getImageDesc('/projects/cp/7- Sistema de ventas.png') },
            { src: '/projects/cp/8- Sistema de arqueo de caja.png', desc: getImageDesc('/projects/cp/8- Sistema de arqueo de caja.png') },
            { src: '/projects/cp/9- Sistema de productos.png', desc: getImageDesc('/projects/cp/9- Sistema de productos.png') },
            { src: '/projects/cp/10- Sistema de carga de productos.png', desc: getImageDesc('/projects/cp/10- Sistema de carga de productos.png') },
            { src: '/projects/cp/11- Sistema de materias primas (Se asignan a los productos).png', desc: getImageDesc('/projects/cp/11- Sistema de materias primas (Se asignan a los productos).png') },
            { src: '/projects/cp/12- Gestión de métodos de pago.png', desc: getImageDesc('/projects/cp/12- Gestión de métodos de pago.png') },
            { src: '/projects/cp/13- Configuración de Menú QR (No requiere programador).png', desc: getImageDesc('/projects/cp/13- Configuración de Menú QR (No requiere programador).png') },
            { src: '/projects/cp/14- Menú QR Dinámico, provienen los productos desde la configuración de productos para el Menú QR y desde productos en si.png', desc: getImageDesc('/projects/cp/14- Menú QR Dinámico, provienen los productos desde la configuración de productos para el Menú QR y desde productos en si.png') },
            { src: '/projects/cp/15- Sistema de monitor de cocina, reflejan los productos vendidos que requieren de cocina en monitores de la misma (Actualiza en tiempo real).png', desc: getImageDesc('/projects/cp/15- Sistema de monitor de cocina, reflejan los productos vendidos que requieren de cocina en monitores de la misma (Actualiza en tiempo real).png') },
            { src: '/projects/cp/16- Sistema de recompensas para clientes dinamico, se configura sin necesidad de programador, desde la configuración de la misma, utiliza los productos seleccionados dinámicamente.png', desc: getImageDesc('/projects/cp/16- Sistema de recompensas para clientes dinamico, se configura sin necesidad de programador, desde la configuración de la misma, utiliza los productos seleccionados dinámicamente.png') },
            { src: '/projects/cp/17- Gestión de empleados.png', desc: getImageDesc('/projects/cp/17- Gestión de empleados.png') }
        ];

        // Asegurar que la primera imagen se muestre correctamente
        let currentSlide = 0;

        card.innerHTML = `
            <div class="relative aspect-video group">
                <div class="carousel-container relative w-full h-full cursor-pointer" id="carousel-container-${project.id}">
                    ${images.map((img, index) => `
                        <div class="carousel-slide ${index === 0 ? 'active' : ''}" style="display: ${index === 0 ? 'block' : 'none'};">
                            <img
                                src="${img.src}"
                                alt="${img.desc}"
                                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                onerror="this.src='${defaultImage}'"
                            />
                            <div class="absolute bottom-0 left-0 right-0 bg-black/50 p-3">
                                <p class="text-white text-sm text-center font-medium">${img.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Navigation arrows - ALWAYS VISIBLE -->
                <div class="carousel-controls absolute inset-0 pointer-events-none z-30">
                    <button type="button" class="carousel-prev absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-200 pointer-events-auto">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <button type="button" class="carousel-next absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-200 pointer-events-auto">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
                
                <!-- View Project Button - ALWAYS VISIBLE -->
                <div class="absolute top-2 right-2 z-30">
                    <button type="button" class="view-project-btn bg-primary-500 hover:bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 pointer-events-auto">
                        View Project
                    </button>
                </div>
            </div>
        `;

    } else {
        // Imagen normal para otros proyectos
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
        `;
    }

    // Agregar el contenido común (título, descripción, tecnologías, etc.)
    const commonContent = `
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
                   class="external-link-icon text-gray-300 hover:text-primary-400 transition-colors">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                </a>
            </div>
        </div>
    `;

    // Agregar el contenido común al card
    card.innerHTML += commonContent;

    // Add carousel functionality AFTER all content is added
    if (project.id === 'capitansalto') {
        const slides = card.querySelectorAll('.carousel-slide');
        const prevBtn = card.querySelector('.carousel-prev');
        const nextBtn = card.querySelector('.carousel-next');
        const viewProjectBtn = card.querySelector('.view-project-btn');
        const carouselContainer = card.querySelector('.carousel-container');
        let currentSlide = 0;

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        };

        // Carousel navigation
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            });

            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            });
        }

        // View project button
        if (viewProjectBtn) {
            viewProjectBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.liveUrl, '_blank');
            });
        }

        // Image click for modal zoom
        if (carouselContainer && images.length > 0) {
            carouselContainer.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                window.openImageModal(images, currentSlide, project.title);
            });
        }

        // Asegurar que la primera imagen se muestre al cargar
        setTimeout(() => {
            showSlide(0);
        }, 100);
        
        // Función para actualizar las descripciones cuando cambie el idioma
        const updateImageDescriptions = () => {
            // Actualizar las descripciones de las imágenes usando el sistema i18n
            images.forEach((img) => {
                img.desc = getImageDesc(img.src);
            });
            
            // Actualizar la descripción visible actual
            const currentSlideElement = card.querySelector('.carousel-slide.active');
            if (currentSlideElement) {
                const descElement = currentSlideElement.querySelector('p');
                if (descElement) {
                    descElement.textContent = images[currentSlide].desc;
                }
            }
        };
        
        // Escuchar el evento de cambio de idioma del sistema
        document.addEventListener('languageChanged', updateImageDescriptions);
    }

    // Make the entire card clickable to visit the live URL (only for non-capitansalto projects)
    if (project.id !== 'capitansalto') {
        // Solo hacer clickeable la imagen y el icono de enlace
        const imageContainer = card.querySelector('.relative.aspect-video.group');
        const externalLinkIcon = card.querySelector('.external-link-icon');
        
        if (imageContainer) {
            imageContainer.style.cursor = 'pointer';
            imageContainer.addEventListener('click', (e) => {
                window.open(project.liveUrl, '_blank');
            });
        }
        
        if (externalLinkIcon) {
            externalLinkIcon.style.cursor = 'pointer';
            externalLinkIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                window.open(project.liveUrl, '_blank');
            });
        }
    }

    // Animation
    setTimeout(() => {
        card.style.transition = 'all 0.8s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);

    return card;
}

// Modal de zoom para las imágenes - Función global
window.openImageModal = function(images, currentIndex, projectTitle) {
    // Crear el modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4';
    modal.id = 'image-modal';
    
    let currentSlide = currentIndex;
    
    // Función para obtener la descripción traducida usando el sistema i18n existente
    const getTranslatedDesc = (imageSrc) => {
        // Extraer el número del archivo (ej: "1- Página principal.png" -> "1")
        const fileName = imageSrc.split('/').pop(); // Obtener solo el nombre del archivo
        const match = fileName.match(/^(\d+)-/); // Extraer el número al inicio
        
        if (match) {
            const key = match[1]; // Solo el número
            // Usar el sistema de traducción existente
            if (i18next && i18next.t) {
                return i18next.t(`portfolio.capitansaltoImages.${key}`);
            }
        }
        
        // Fallback: devolver el nombre sin extensión
        const nameWithoutExt = fileName.replace(/\.(png|gif|jpg|jpeg)$/i, '');
        return nameWithoutExt;
    };
    
    modal.innerHTML = `
        <div class="relative max-w-6xl max-h-full w-full h-full flex flex-col">
            <!-- Header -->
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-white text-xl font-bold">${projectTitle}</h3>
                <button id="close-modal" class="text-white hover:text-gray-300 text-2xl font-bold">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            
            <!-- Image Container -->
            <div class="relative flex-1 flex items-center justify-center">
                <div class="relative max-w-full max-h-full">
                    <img
                        id="modal-image"
                        src="${images[currentSlide].src}"
                        alt="${images[currentSlide].desc}"
                        class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    />
                    
                    <!-- Navigation arrows -->
                    <button id="modal-prev" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <button id="modal-next" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <!-- Description -->
            <div class="mt-4 bg-black/50 p-4 rounded-lg">
                <p id="modal-description" class="text-white text-center text-lg font-medium">
                    ${getTranslatedDesc(images[currentSlide].src)}
                </p>
            </div>
            
            <!-- View Project Button -->
            <div class="mt-4 flex justify-center">
                <button id="modal-view-project" class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200">
                    View Project
                </button>
            </div>
        </div>
    `;
    
    // Agregar al DOM
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Funciones del modal
    const modalImage = modal.querySelector('#modal-image');
    const modalDescription = modal.querySelector('#modal-description');
    const modalPrev = modal.querySelector('#modal-prev');
    const modalNext = modal.querySelector('#modal-next');
    const closeModal = modal.querySelector('#close-modal');
    const viewProjectBtn = modal.querySelector('#modal-view-project');
    
    const showModalSlide = (index) => {
        currentSlide = index;
        modalImage.src = images[currentSlide].src;
        modalImage.alt = images[currentSlide].desc;
        modalDescription.textContent = getTranslatedDesc(images[currentSlide].src);
    };
    
    // Event listeners
    modalPrev.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
        showModalSlide(currentSlide);
    });
    
    modalNext.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % images.length;
        showModalSlide(currentSlide);
    });
    
    closeModal.addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    });
    
    viewProjectBtn.addEventListener('click', () => {
        // Encontrar el proyecto y abrir su URL
        const projectCards = document.querySelectorAll('[data-project-id]');
        for (let card of projectCards) {
            if (card.dataset.projectId === 'capitansalto') {
                const projectUrl = card.querySelector('a[href*="http"]')?.href;
                if (projectUrl) {
                    window.open(projectUrl, '_blank');
                }
                break;
            }
        }
    });
    
    // Cerrar con Escape
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', escapeHandler);
        }
    });
    
    // Cerrar al hacer clic fuera de la imagen
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        }
    });
    
    // Función para actualizar las descripciones en el modal cuando cambie el idioma
    const updateModalDescriptions = () => {
        modalDescription.textContent = getTranslatedDesc(images[currentSlide].src);
    };
    
    // Escuchar el evento de cambio de idioma del sistema
    document.addEventListener('languageChanged', updateModalDescriptions);
}
