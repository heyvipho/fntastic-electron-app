<script>
import {connect} from "@/utils/socket"

export default {
  name: 'App',
  components: {},
  props: {},
  emits: [],
  data() {
    return {
    }
  },
  created() {
    connect()
  },
  watch: {
    connected(value) {
        console.log(value)
    }
  },
  computed: {
    connected() {
      return this.$store.state.main.connected
    }
  },
  methods: {},
}
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
@import "@/style/global";
</style>
