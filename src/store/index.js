import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

/* root state */
const state = {
  author: 'Adarsh Singh',
  toolbarTitle: 'Dashboard'
}

/* initial store */
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
