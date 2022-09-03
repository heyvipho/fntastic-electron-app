export default {
  namespaced: true,
  state: () => ({
    rooms: [],
    info: null,
  }),
  getters: {},
  mutations: {
    setRooms(state, value) {
      state.rooms = value
    },
    setInfo(state, value) {
      state.info = value
    },
    reset(state) {
      state.rooms = []
      state.info = null
    },
  },
  actions: {},
}
