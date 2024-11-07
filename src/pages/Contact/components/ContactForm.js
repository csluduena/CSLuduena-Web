import { t } from '../../../i18n/config.js';

export function createContactForm() {
    const form = document.createElement('form');
    form.className = 'relative bg-dark-300 rounded-lg p-8 shadow-lg max-w-lg mx-auto opacity-0 transform translate-y-4';

    form.innerHTML = `
        <div class="mb-6">
            <label for="name" class="block text-gray-300 text-sm font-medium mb-2">
                ${t('contact.form.name')}
            </label>
            <input
                type="text"
                id="name"
                name="name"
                required
                class="w-full bg-dark-400 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-500"
            />
        </div>

        <div class="mb-6">
            <label for="email" class="block text-gray-300 text-sm font-medium mb-2">
                ${t('contact.form.email')}
            </label>
            <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full bg-dark-400 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-500"
            />
        </div>

        <div class="mb-6">
            <label for="message" class="block text-gray-300 text-sm font-medium mb-2">
                ${t('contact.form.message')}
            </label>
            <textarea
                id="message"
                name="message"
                required
                rows="4"
                class="w-full bg-dark-400 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-500"
            ></textarea>
        </div>

        <button
            type="submit"
            class="w-full bg-primary-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors"
        >
            ${t('contact.form.send')}
        </button>
    `;

    // Form submission handler
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log('Form submitted:', data);
        // Here you would typically send the data to your backend
    });

    // Animation
    setTimeout(() => {
        form.style.transition = 'all 0.8s ease-out';
        form.style.opacity = '1';
        form.style.transform = 'translateY(0)';
    }, 200);

    return form;
}