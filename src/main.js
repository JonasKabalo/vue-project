import './assets/main.css'

import { createApp, version } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import $bus from './plugins/bus';

const app = createApp(App)

app.config.globalProperties.$version = version;
app.config.globalProperties.$bus = $bus;

app.provide(/* key */ 'message', /* value */ 'message from app')

app.use(createPinia())
app.use(router)
app.use($bus);

app.mount('#app')
