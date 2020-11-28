import Vue from 'vue';
import Router from 'vue-router';
import Broadcast from './router/broadcast' // 直播需求

Vue.use(Router)
export function createRouter() {
    // vue-router有个bug，ie9个定义了scrollBehavior就直接访问history.replaceState，导致报错
    return new Router({
        mode: 'history',
        fallback: false,
        routes: [
            ...Broadcast,
        ],
    });
}
