<script>
import {connect} from "@/utils/socket";
import toast from "@/utils/toast";

export default {
  name: 'Reconnect',
  components: {},
  props: {},
  emits: [],
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
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
  <div class="wrapper">
    <div class="block">
      <div class="heading">You are not connected</div>
      <button
          @click="reconnect()"
          class="button"
      >
        Reconnect
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/global";

.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.block {
  text-align: center;

  .heading {
    color: white;
    font-size: 24px;
    padding: 16px;
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
}
</style>
