import i18next from 'i18next';

export async function setupI18n() {
    const enTranslations = await import('./locales/en.json');
    const esTranslations = await import('./locales/es.json');

    await i18next.init({
        resources: {
            en: {
                translation: enTranslations.default
            },
            es: {
                translation: esTranslations.default
            }
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

    return i18next;
}

export function t(key) {
    return i18next.t(key);
}

export function changeLanguage(lng) {
    return i18next.changeLanguage(lng);
}