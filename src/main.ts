import { createApp } from 'vue'
import "./style/index.scss"
import 'shuimo-ui/dist/style.css';
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
