import {createI18n} from "vue-i18n";
import pluralRules from "./rules/pluralization"
import en from "./locales/en.json";
import ua from "./locales/ua.json";

export const defaultLocale = 'ua';
const selectedLang = localStorage.getItem('lang');

const i18n = createI18n({
    locale: selectedLang || defaultLocale,
    fallbackLocale: 'ua',
    legacy: false,
    messages: {en, ua},
    pluralRules
});

export default i18n;