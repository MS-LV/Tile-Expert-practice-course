
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Tile-Expert/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Tile-Expert"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23663, hash: '17f41c36e2f0d08c2c864b5c854a47f85dd4c3415c2e02ef7c6ef189cb9caeb3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17146, hash: '9f94af4d6332c20e928f53addf51e7c9f9fb0a9c0345fbc9dec85765aa806fdc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 65762, hash: '8ef709d373803116ab26042447a95b50a8443c956fa388c2a1a7186b5b217c27', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RVAPUIFW.css': {size: 7070, hash: 'R9LiOgJj0lI', text: () => import('./assets-chunks/styles-RVAPUIFW_css.mjs').then(m => m.default)}
  },
};
