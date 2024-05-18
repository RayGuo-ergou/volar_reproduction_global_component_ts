import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseInput from './components/BaseInput.vue'
import BaseButton from './components/BaseButton.vue'

const app = createApp(App)

app.component('BaseInput', BaseInput)
app.component('BaseButton', BaseButton)

app.mount('#app')
