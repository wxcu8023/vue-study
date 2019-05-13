import shop from '../../api/process'
const state = {
    postState:{
        result: '',
        process: ''
    }
}

const getters = {
    getState:state =>{
        return state.postState
    }
}

const actions = {
    getAllStates({commit},name){
        shop.getState(words =>{
            commit('setState',words)
        })
    }
}

const mutations = {
    setWords(state,words){
        state.words = words
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
