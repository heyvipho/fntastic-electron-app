export default {
  namespaced: true,
  state: () => ({
    connected: false,
  }),
  getters: {},
  mutations: {
    setConnected(state, value) {
      state.connected = value
    }
  },
  actions: {},
}
