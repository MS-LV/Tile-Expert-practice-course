
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/browser/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/browser"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23659, hash: '5121f7849256acb909a650772901dbd0f6ebe95569344fbe2df01c34871c5c9d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17142, hash: '7ed9db03123c0b0a1dc9f17dfb5f8ba1c06cd2b3ee2117a11d7eb5672a4a9aef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 65758, hash: '914770c000f776856b20a69b364ba5c3b8bb6882bfd46274416ddfe895585ef8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RVAPUIFW.css': {size: 7070, hash: 'R9LiOgJj0lI', text: () => import('./assets-chunks/styles-RVAPUIFW_css.mjs').then(m => m.default)}
  },
};
