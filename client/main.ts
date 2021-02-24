import Vue from 'vue';
import App from './App.vue';

import {createRouter} from './router';

import {createStore} from './store';


const store = createStore({cookie:'', ip:'', ua:''});
const router = createRouter();



const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
