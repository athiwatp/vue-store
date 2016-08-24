import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    basketItems: []
}

const mutations = {
    ADD_ITEM_TO_BASKET(state, item) {
        state.basketItems.push(item)
    },
    REMOVE_ITEM_FROM_BASKET(state, id) {
        state.basketItems = state.basketItems.filter(item => {
            if(item.id !== id) return item
        })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    strict: true
})