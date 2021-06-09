import { createApp } from 'vue'
import App from './App.vue'
import './css/style.css'
import './css/fontawesome/css/all.css'
import router from './router/index.js'
import store from './store/index.js'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')