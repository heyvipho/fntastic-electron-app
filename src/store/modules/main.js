export default {
  namespaced: true,
  state: () => ({
    connected: false,
  }),
  getters: {},
  mutations: {
    setConnected(state, value) {
      state.connected = value
    },
  },
  actions: {
    reset({ commit }) {
      commit('users/reset')
      commit('rooms/reset')
    },
  },
}
