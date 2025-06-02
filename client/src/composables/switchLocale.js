import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const currentLocale = ref(locale.value);

const switchLanguage = () => {
    currentLocale.value = currentLocale.value === 'en' ? 'fr' : 'en';
    locale.value = currentLocale.value;
};