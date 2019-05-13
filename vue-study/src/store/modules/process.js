import shop from '../../api/process'

const state = {
    postState:{
        result:'0',
        process:'0'
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
