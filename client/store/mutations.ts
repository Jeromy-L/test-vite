import Vue from 'vue';

export default {

    SET_TOKEN: (state, {token}) => {
        Vue.set(state, 'token', token);
    },

    SET_USER_STATE: (state, { userState }) => {
        Vue.set(state, 'user', userState);
    },
};
