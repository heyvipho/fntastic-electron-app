<script>
import WrapperMain from "@/components/WrapperMain.vue";
import Rooms from "@/components/Rooms.vue";

export default {
  name: 'HomeView',
  components: {
    Rooms,
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
    <Rooms></Rooms>
  </WrapperMain>
</template>

<style lang="scss" scoped>
@import "@/style/global";
</style>
