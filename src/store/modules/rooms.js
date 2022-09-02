export default {
  namespaced: true,
  state: () => ({
    rooms: [],
  }),
  getters: {},
  mutations: {
    setRooms(state, value) {
      state.rooms = value
    },
    reset(state) {
      state.rooms = []
    },
  },
  actions: {},
}
