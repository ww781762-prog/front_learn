import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import "virtual:svg-icons-register"
import  globalComponents  from '@/components'

const app = createApp(App)
globalComponents.install(app)

app.use(ElementPlus)
app.mount('#app')
