export default {
  namespaced: true,
  state: () => ({}),
  getters: {},
  mutations: {},
  actions: {
    moveUser({}, {roomID, userID}) {
      console.log(roomID, userID)
    }
  },
}
