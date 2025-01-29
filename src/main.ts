import {createApp} from 'vue'
import {createI18n} from 'vue-i18n';
import './style.css'
import App from './App.vue'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'ua',
    legacy: false,
    messages: {
        ua: {
            message: {
                title: 'Відгуки наших клієнтів у Google',
                reviews: 'відгуки',
                buttons: {
                    view: 'Переглянути',
                    write: 'Написати'
                }
            },
        },
        en: {
            message: {
                title: 'Our customer reviews on Google',
                reviews: 'reviews',
                buttons: {
                    view: 'View',
                    write: 'Write'
                }
            },
        },
    },
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
