import Vue from 'vue'
import Vuex from 'vuex'
import {Storage} from "@/store/modules/storage";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        version: '1.0.0',
    },
    mutations: {},
    actions: {},
    modules: {
        "Storage": Storage
    },
    getters: {
        getVersion: (state) => state.version,
    }
})
