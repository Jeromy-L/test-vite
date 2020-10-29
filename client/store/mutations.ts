import Vue from 'vue';

export default {

    SET_TOKEN: (state, {token}) => {
        Vue.set(state, 'token', token);
    },

    SET_USER_STATE: (state, { userState }) => {
        Vue.set(state, 'user', userState);
    },
    CLEAR_USER_STATE: (state) => {
        Vue.set(state, 'user', {
            login: false,
            isOfficialUser: false,
            headimgurl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0?wx_fmt=png',
            nickname: '',
            openid: '',
            user_name: '',
            authority: [],
        });
    },
    SET_USER_STATE_LOADING: (state, {loading}) => {
        Vue.set(state.user, 'loading', loading);
    },

};
