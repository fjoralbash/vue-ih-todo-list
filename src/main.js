import './assets/main.css'
import './style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Tooltip from "primevue/tooltip";
import Tailwind from "primevue/passthrough/tailwind";



import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import '/node_modules/primeflex/primeflex.css';
import 'primevue/resources/themes/luna-amber/theme.css';


const app = createApp(App)
app.directive("tooltip", Tooltip)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.use(ToastService)
app.use(PrimeVue, { unstyled: true, pt: Tailwind })
app.mount('#app')
