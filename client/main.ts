import './polyfill';
import Vue from 'vue';
import App from './App.vue';
// import Meta from 'vue-meta/dist/vue-meta.esm.browser';
import Meta from 'vue-meta';

import {createRouter} from './router';
import {sync} from 'vuex-router-sync';
// import {sync} from './testModule/vuex-router-sync.ts';

import {createStore} from './store';
import Tips from './plugin/tips';

Vue.use(Meta, {
    keyName: 'head', // the component option name that vue-meta looks for meta infoL on.
    attribute: 'data-n-head', // the attribute name vue-meta adds to the tags it observes
    ssrAttribute: 'data-n-head-ssr', // the attribute name that lets vue-meta know that meta infoL has already been server-rendered
    tagIDKeyName: 'hid', // the property name that vue-meta uses to determine whether to overwrite or append a tag
});
Vue.use(Tips);
Vue.config.productionTip = false;


// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
// create store and router instances
const store = createStore({cookie:'', ip:'', ua:''});
const router = createRouter();

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);


// create the app instance.
// here we inject the router, store and ssr context to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
