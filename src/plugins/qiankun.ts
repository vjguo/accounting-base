import type { AccountingDatabase } from '@vongolajs/types-accounting'
import { app } from '@/main'
import { useDatabaseStore } from '@/store/database-store'
declare global {
  interface Window {
    __POWERED_BY_QIANKUN__?: boolean
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string
  }
}
interface QiankunProps {
  container: HTMLElement
  database: AccountingDatabase
}

function getRenderContainer(props: QiankunProps) {
  const { container } = props
  return container ? container.querySelector('#app') : document.querySelector('#app')
}

export function isPoweredByQiankun() {
  return window.__POWERED_BY_QIANKUN__
}

export async function bootstrap() {
  console.log('vue app bootstraped')
}

export async function mount(props: QiankunProps) {
  const databaseStore = useDatabaseStore()
  databaseStore.database = props.database
  app.mount(getRenderContainer(props) as Element)
}

export async function unmount() {
  app?.unmount()
}

export async function update(props: QiankunProps) {
  console.log('update props', props)
}
