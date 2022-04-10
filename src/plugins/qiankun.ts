import { createApp } from 'vue'
import AppComponent from '@/App.vue'
import router from '@/router'
import store from '@/store'
import type { App } from 'vue'

export interface QiankunWindow extends Window {
  __POWERED_BY_QIANKUN__?: boolean
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string
}

interface QiankunProps {
  container: HTMLElement
}

let app: App | null

function getRenderContainer(props: QiankunProps) {
  const { container } = props
  return container ? container.querySelector('#app') : document.querySelector('#app')
}

export function isPoweredByQiankun() {
  return (window as QiankunWindow).__POWERED_BY_QIANKUN__
}

export async function bootstrap() {
  console.log('vue app bootstraped')
}

export async function mount(props: QiankunProps) {
  app = createApp(AppComponent).use(store).use(router)
  app.mount(getRenderContainer(props))
}

export async function unmount() {
  app?.unmount()
  app = null
}

export async function update(props: QiankunProps) {
  console.log('update props', props)
}
