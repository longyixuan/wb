import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

const state = {

}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

export default store;