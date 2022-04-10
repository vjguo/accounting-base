import type { QiankunWindow } from '@/plugins/qiankun'

if ((window as QiankunWindow).__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = (window as QiankunWindow).__INJECTED_PUBLIC_PATH_BY_QIANKUN__ as string
}
