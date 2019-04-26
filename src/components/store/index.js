import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    istrue: false,
    cityitem: '北京',
}

const mutations = {
    changeSeen(state,changeSeen) {
        state.isSeen = changeSeen;
    },
    changeItem(state,Item) {
        state.dataItem = Item;
    },
    switchCity(state, payload) {
        state.cityitem = payload.cityitem;
    }
}

const store = new Vuex.Store({
    state,
    mutations
})

export default store