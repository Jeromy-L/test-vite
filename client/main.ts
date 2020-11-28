import './polyfill';
import Vue from 'vue';
import App from './App.vue';
// import Meta from 'vue-meta/dist/vue-meta.esm.browser';
import Meta from 'vue-meta';

import {createRouter} from './router';
import {sync} from 'vuex-router-sync';
// import {sync} from './testModule/vuex-router-sync.ts';

import {createStore} from './store';

Vue.use(Meta, {
    keyName: 'head', // the component option name that vue-meta looks for meta infoL on.
    attribute: 'data-n-head', // the attribute name vue-meta adds to the tags it observes
    ssrAttribute: 'data-n-head-ssr', // the attribute name that lets vue-meta know that meta infoL has already been server-rendered
    tagIDKeyName: 'hid', // the property name that vue-meta uses to determine whether to overwrite or append a tag
});
Vue.config.productionTip = false;


const store = createStore({cookie:'', ip:'', ua:''});
const router = createRouter();

sync(store, router);


const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
