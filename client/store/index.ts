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
                login: false,
                isOfficialUser: false,
                headimgurl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0?wx_fmt=png',
                nickname: '',
                openid: '',
                user_name: '',
                loading: true,
                authority: [],
            },
            list: [],
        },
        actions: createAction(options),
        mutations,
        getters,
    });
}
