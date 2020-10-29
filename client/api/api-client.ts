import Axios from 'axios';
import jsCookie from 'js-cookie';

export function createAPI(opt?: object) {
    // 客户端渲染下不需要cookie
    const axios =  Axios.create({
        baseURL: `/`,
        timeout: 6000,
    });

    axios.interceptors.request.use(function(config) {
        config.params = Object.assign({}, config.params, {
            random: Math.random(),
        }, jsCookie.get('server_token') ? {
            token: jsCookie.get('server_token'),
        } : {});

        return config;
    });
    return axios;
}
