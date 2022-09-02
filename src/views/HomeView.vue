<script>
import WrapperMain from "@/components/WrapperMain.vue";
import RoomList from "@/components/RoomList.vue";
import Reconnect from "@/components/Reconnect.vue";

export default {
  name: 'HomeView',
  components: {
    Reconnect,
    RoomList,
    WrapperMain,
  },
  props: {},
  emits: [],
  data() {
    return {}
  },
  watch: {},
  computed: {
    connected() {
      return this.$store.state.main.connected
    },
  },
  methods: {},
}
</script>

<template>
  <WrapperMain>
    <RoomList v-if="connected"></RoomList>
    <Reconnect v-else></Reconnect>
  </WrapperMain>
</template>

<style lang="scss" scoped>
@import "@/style/global";
</style>
