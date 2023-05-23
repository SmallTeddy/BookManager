import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './samples/node-api'

const app = createApp(App)

app.use(router)

app
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
