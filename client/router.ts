import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        routes: [
            {
                path: '/home',
                component: () => import('./views/Home.vue')
            },
                // 开发文档
            {
                path:  '/dev',
                component: () => import('./views/Dev.vue')
            },
            {
                path:  '/test',
                component: () => import('./views/Test.vue')
            }
        ],
    });
}
