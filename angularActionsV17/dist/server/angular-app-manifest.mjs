
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angularActionsv17/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angularActionsv17"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 460, hash: 'f572d106c7204a1126aae8aa7863d71880752ee4433586a791273cc306b4a625', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 973, hash: 'df69f85c444b5408e808e5a58bf6f09d26a04036c7110f0036714eb8f6d32d6c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21581, hash: '1e41ce2bdfe41069cba448c1c978b63671fa55dbf9a1f8fdca95425916df55f4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
