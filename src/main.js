import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import i18n from './i18n';
import './index.css'; 
import '@fortawesome/fontawesome-free/css/all.css'; 

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(i18n);
app.mount('#app');
