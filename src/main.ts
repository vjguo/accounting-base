import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/public-path'
import { isPoweredByQiankun } from '@/plugins/qiankun'
export { bootstrap, mount, unmount, update } from '@/plugins/qiankun'

function mount() {
  createApp(App).use(store).use(router).mount('#app')
}

isPoweredByQiankun() || mount()
