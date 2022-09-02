export default {
  namespaced: true,
  state: () => ({
    info: null,
  }),
  getters: {},
  mutations: {
    setInfo(state, value) {
      state.info = value
    },
    reset(state) {
      state.info = null
    },
  },
  actions: {},
}
