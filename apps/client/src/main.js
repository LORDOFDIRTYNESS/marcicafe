import "./assets/styles/main.css";

import axios from 'axios'

import Aura from "@primeuix/themes/aura";
import Button from "primevue/button";
import PrimeVue from "primevue/config";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import SelectButton from "primevue/selectbutton";
import StyleClass from "primevue/styleclass";
import ToggleSwitch from "primevue/toggleswitch";
import Toolbar from "primevue/toolbar";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import i18n from './i18n';
import router from "./router/index.js";
import {appState, useLayout} from "./composables/useLayout";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


/* add icons to the library */
library.add(fas, fab)

const app = createApp(App);

const options = {
    position: 'top-center', // Choose the placement (e.g., 'top-right', 'top-center', 'bottom-left', etc.)
};


axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3001'

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(i18n);
app.component('VueDatePicker', VueDatePicker);
app.use(PrimeVue, {
});
app.use(Toast,options);

app.component("Button", Button);
app.component("InputText", InputText);
app.component("FloatLabel", FloatLabel);
app.component("Toolbar", Toolbar);
app.component("ToggleSwitch", ToggleSwitch);
app.component("SelectButton", SelectButton);
app.directive("styleclass", StyleClass);

// Set dark mode by default
appState.value.darkMode = false;
document.documentElement.classList.remove("p-dark");
useLayout().updateColors("primary", "marci");

app.mount("#app");