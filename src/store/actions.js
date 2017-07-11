/* actions that commits mutations to update the state */
const actions = {
  setToolbarTitle: ({ commit }, payload) => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    commit('setToolbarTitle', payload)
  }
}

export default actions
