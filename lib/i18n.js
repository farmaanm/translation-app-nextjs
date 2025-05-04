'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpBackend) // load translations from /public
    .use(LanguageDetector) // detect user language
    .use(initReactI18next) // pass i18n to react-i18next
    .init({
        fallbackLng: 'en-US',
        debug: false,
        interpolation: {
            escapeValue: false, // React already protects from XSS
        },
        backend: {
            loadPath: '/locales/{{lng}}.json',
        },
        react: {
            useSuspense: false, // set true if you use Suspense
        }
    });

export default i18n;
