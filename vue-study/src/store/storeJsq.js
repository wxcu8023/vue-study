import Vue from 'vue'
import Vuex from 'vuex'
import process from './modules/process'
import mutations from './mutations'
import getters from './getters'
// import state from './state'
// import result from './modules/result'
Vue.use(Vuex)

export default function() {
    return new Vuex.Store({
        state: {},
        getters,
        mutations,
        modules: {
            prs: process
        }
    })
}
