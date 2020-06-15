/**************基础组件********************/
export default [
  {
    path: '/basic',
    name: 'layout',
    meta: {
      title: 'Layout 布局',
      keepAlive: true
    },
    component: resolve => require(['@/views/basic/layout'], resolve)
  },
  {
    path: '/basic/layout',
    name: 'layout',
    meta: {
      title: 'Layout 布局',
      keepAlive: true
    },
    component: resolve => require(['@/views/basic/layout'], resolve)
  },
  {
    path: '/basic/popup',
    name: 'popup',
    meta: {
      title: 'Popup 弹出层',
      keepAlive: true
    },
    component: resolve => require(['@/views/basic/popup'], resolve)
  }
]
