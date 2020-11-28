import Vue from 'vue';
import Vuex from 'vuex';
import { createAction } from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export function createStore(options = {}) {
    return new Vuex.Store({
        state: {
            user: {
                authority: [],
            },
            list: [],
        },
        actions: createAction(options),
        mutations,
        getters,
    });
}
