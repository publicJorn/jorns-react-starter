const el = document.createElement('div')
if (!el.closest) import(/* webpackChunkName: "dom-polyfills" */ 'dom-polyfills')
