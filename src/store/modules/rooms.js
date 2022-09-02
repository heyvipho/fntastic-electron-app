export default {
  namespaced: true,
  state: () => ({}),
  getters: {},
  mutations: {},
  actions: {
    moveUser({}, {userID, roomID}) {
      console.log(userID, roomID)
    },
    kickUser({}, {userID}) {
      console.log(userID)
    },
  },
}
