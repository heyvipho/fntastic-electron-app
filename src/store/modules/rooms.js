export default {
  namespaced: true,
  state: () => ({
    rooms: [],
    yourRoom: null,
  }),
  getters: {},
  mutations: {
    setRooms(state, value) {
      state.rooms = value
    },
    setYourRoom(state, value) {
      state.yourRoom = value
    },
  },
  actions: {},
}
