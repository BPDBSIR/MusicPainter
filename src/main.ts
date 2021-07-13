import {createApp} from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'
import './assets/styles/main.scss'
import './assets/styles/iconfont.scss'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/lib/index.full'


const app = createApp(App)
app.use(Router).use(Store).use(ElementPlus).mount('#app')
