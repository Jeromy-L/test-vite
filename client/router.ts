import Vue from 'vue';
import Router from 'vue-router';
import Broadcast from './router/broadcast' // 直播需求

import Home from './views/Home.vue';
import Test from './views/Test.vue';
import Dev from './views/Dev.vue';

// const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue');
Vue.use(Router)
export function createRouter() {
    // vue-router有个bug，ie9个定义了scrollBehavior就直接访问history.replaceState，导致报错
    const isIE9 = typeof navigator !== 'undefined' && navigator.userAgent.indexOf('MSIE 9.0') !== -1;
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: isIE9 ? null : function(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition;
            } else if (to.hash) {
                return {selector: to.hash};
            } else if (to.meta.savePosition) {
                return;
            } else {
                return {x: 0, y: 0};
            }

        },
        routes: [
            ...Broadcast,
        ],
    });
}
