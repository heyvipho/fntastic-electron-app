<script>
import {ipc} from "@/utils/ipc";
import toast from "@/utils/toast";

export default {
  name: 'SettingsUser',
  components: {},
  props: {},
  emits: [],
  data() {
    return {
      userLogin: "",
    }
  },
  async created() {
    try {
      const {userLogin} = await ipc.getUserLogin()
      this.userLogin = userLogin
    } catch (e) {
      toast.error("Error was occurred")
    }
  },
  watch: {},
  methods: {
    async setUserLogin(userLogin) {
      try {
        await ipc.setUserLogin(userLogin)
      } catch (e) {
        toast.error("Error was occurred")
        return
      }
      toast.info("User login was changed successfully")
    },
  },
}
</script>

<template>
  <input v-model="userLogin" type="text" class="input">
  <button
      class="button"
      @click="setUserLogin(userLogin)"
  >
    Save
  </button>
</template>

<style lang="scss" scoped>
@import "@/style/global";

.input {
  background: rgba(255, 255, 255, .2);
  outline: none;
  border: none;
  color: white;
  height: 40px;
  width: 300px;
  border-radius: 8px;
  padding: 0 12px;
}

.button {
  background: rgba(255, 255, 255, .2);
  outline: none;
  border: none;
  color: white;
  height: 40px;
  border-radius: 8px;
  padding: 0 12px;
  margin-left: 16px;

  &:active {
    background: rgba(255, 255, 255, .1);
  }
}
</style>
