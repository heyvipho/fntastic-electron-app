import { createStore } from 'vuex'
import users from "@/store/modules/users";
import rooms from "@/store/modules/rooms";

// Create a new store instance.
const store = createStore({
  modules: {
    users,
    rooms,
  },
})

export default store
