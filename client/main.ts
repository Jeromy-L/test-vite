import Vue from 'vue';
import App from './App.vue';
// import Meta from 'vue-meta/dist/vue-meta.esm.browser';

import {createRouter} from './router';
import {sync} from 'vuex-router-sync';

import {createStore} from './store';

Vue.config.productionTip = false;


const store = createStore({cookie:'', ip:'', ua:''});
const router = createRouter();

sync(store, router);


const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
