import App from './App.vue'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
import PuzzleGame from './components/Puzzle/PuzzleGame.vue'
app.component('PuzzleGame', PuzzleGame)
import ArrowDirectionEngine from './components/ArrowDirection/ArrowDirectionEngine.vue'
app.component('ArrowDirectionEngine', ArrowDirectionEngine)
import ArrowDirectionGame from './components/ArrowDirection/ArrowDirectionGame.vue'
app.component('ArrowDirectionGame', ArrowDirectionGame)
import ArrowDirectionEducation from './components/ArrowDirection/ArrowDirectionEducational .vue'
app.component('ArrowDirectionEducation', ArrowDirectionEducation)
import ArrowDirectionLevelPage from './components/ArrowDirection/ArrowDirectionLevelPage.vue'
app.component('ArrowDirectionLevelPage', ArrowDirectionLevelPage)

app.mount('#app')
