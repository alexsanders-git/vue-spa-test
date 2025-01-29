import {createI18n} from "vue-i18n";
import pluralRules from "./rules/pluralization"
import en from "./locales/en.json";
import ua from "./locales/ua.json";

const i18n = createI18n({
    locale: 'ua',
    fallbackLocale: 'ua',
    legacy: false,
    messages: {en, ua},
    pluralRules
});

export default i18n;