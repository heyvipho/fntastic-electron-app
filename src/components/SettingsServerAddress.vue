<script>
import {ipc} from "@/utils/ipc";
import toast from "@/utils/toast";
import {connect} from "@/utils/socket";

export default {
  name: 'SettingsServerAddress',
  components: {},
  props: {},
  emits: [],
  data() {
    return {
      address: "",
    }
  },
  async created() {
    const {address} = await ipc.getServerAddress()
    this.address = address
  },
  watch: {},
  methods: {
    async setServerAddress(address) {
      try {
        await ipc.setServerAddress(address)
      } catch (e) {
        toast.error("Error was occurred")
        return
      }
      toast.info("Address was changed successfully")
    },
    async reconnect() {
      try {
        await connect()
      } catch (e) {
        toast.error("Error was occurred")
      }
    },
  },
}
</script>

<template>
  <input v-model="address" type="text" class="input">
  <button
      class="button"
      @click="setServerAddress(address)"
  >
    Save
  </button>
  <button
      class="button"
      @click="reconnect()"
  >
    Reconect
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
