
// import Home from '../views/Home.vue';
// import Test from '../views/Test.vue';
// import Dev from '../views/Dev.vue';

export default [
    // 直播助手 直播间管理
    {
      meta: { auth: 'broadcast' },
      path: '/home',
      component: () => import('../views/Home.vue')
    },
    // 开发文档
    {
      meta: { auth: 'broadcast' },
      path:  '/dev',
      component: () => import('../views/Dev.vue')
    },
    {
        meta: { auth: 'broadcast' },
        path:  '/test',
        component: () => import('../views/Test.vue')
      },
      {
        meta: { auth: 'broadcast' },
        path:  '/doc',
        component: () => import('../views/broadcast/doc.vue')
      },
  ]
  