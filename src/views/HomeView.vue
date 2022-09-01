<script>
import WrapperMain from "@/components/WrapperMain.vue";
import RoomList from "@/components/RoomList.vue";

export default {
  name: 'HomeView',
  components: {
    RoomList,
    WrapperMain,
  },
  props: {},
  emits: [],
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
}
</script>

<template>
  <WrapperMain>
    <RoomList></RoomList>
  </WrapperMain>
</template>

<style lang="scss" scoped>
@import "@/style/global";
</style>
