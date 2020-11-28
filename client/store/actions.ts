
export function createAction(options) {
    const api = {
        get:(a)=>{
            return new Promise((res, rej) => {
                return {success:1}
            })
        }};
    return {
        FETCH_USER_STATE: ({commit}) => {
            const url = '/mock/cgi/userinfo';
            commit('SET_USER_STATE_LOADING', {loading: true});
            return api.get(url).then((response: any) => {
                if (response.success) {
                    commit('SET_USER_STATE', {userState: {...response.data, login: true}});
                } else {
                    commit('CLEAR_USER_STATE');
                }
                commit('SET_USER_STATE_LOADING', {loading: false});
            }).catch(err => {
                commit('SET_USER_STATE_LOADING', {loading: false});
            });
        },

        FETCH_DATA: ({commit}) => {
            const url = '/mock/cgi/data';
            return api.get(url).then(response => {

            });
        },

    };
}
