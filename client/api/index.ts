import { createAPI } from './api-client';
import qs from 'qs';
import Vue from 'vue';
/**
 * 确保服务端渲染时，api是唯一的
 * @param cookie
 * @returns {{}}
 */
export function createDefaultApi(opt?: object) {
    const tips: any = new (Vue.extend({name: 'tips'}));
    const api = createAPI(opt);
    function get(url: string, params?: object) {
        if (params) {
            return api.get(url, { params }).then(response => response.data).catch(err => {
                tips.$tips.err(err.msg || '服务异常，请稍候再试');
                throw err;
            });
        }
        return api.get(url).then(response => {
            if (!response.data.success && response.data.code !== 0) {
                switch (response.data.code) {
                    case -1010:
                        tips.$tips.err('提交太频繁，请稍候再试');
                        break;
                }
            }
            return response.data;
        }).catch(err => {
            tips.$tips.err(err.msg || '服务异常，请稍候再试');
            throw err;
        });
    }

    function post(url: string, data?: object) {
        return api.post(url, qs.stringify(data), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(response => {
            return response.data;
        }).catch(err => {
            tips.$tips.err(err.msg || '服务异常，请稍候再试');
            throw err;
        });
    }

    return {
        get(url: string, params?: object) {
            return get(url, params);
        },
        post(url: string, data?: object) {
            return post(url, data);
        },
    };
}

export const api = createDefaultApi();
