import { createApp } from 'vue'
import FriendsList from './components/FriendsList.vue'
import App from './App.vue'

const app = createApp(App)
app.component('friends-list', FriendsList)
app.mount('#app')


