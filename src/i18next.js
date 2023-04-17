
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "forcastHeader": "5 Day forcast.",
                    "searchLabel": "Search city:",
                    "searchButtonLabel": 'Search',
                    'validationError': 'Please enter city name !!!'

                }
            }
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });