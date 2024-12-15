import './assets/main.css'
import 'font-awesome/css/font-awesome.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

createApp(App).use(router).mount('#app')
