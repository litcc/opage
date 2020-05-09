import {Module} from 'vuex';

/**
 * 数据储存工具
 */
export const Storage: Module<any, any> = {
    namespaced: true,
    state: {
        memoryStorage: {},
        sessionStorage: {},
        localStorage: {},
        cacheStorage: {},
    },
    actions: {},
    mutations: {},
    getters: {},
};
