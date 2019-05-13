import shop from '../../api/hw'

const state = {
    result: ''
}

const getters = {

}

const actions = {
    getAllresult({ commit }) {
        shop.getResult(result => {
            commit('setResult', result)
        })
    }
}

const mutations = {
    setResult(state, result) {
        state.result = result
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
