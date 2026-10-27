import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'

const app = createApp(App)

app.use(router) // <-- This line links the router to your app!
app.mount('#app')