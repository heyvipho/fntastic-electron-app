<script>
import House from "@/components/icons/House.vue";
import Gear from "@/components/icons/Gear.vue";
export default {
  name: 'WrapperMain',
  components: {House, Gear},
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
  <div class="main">
    <div class="left-bar">
      <div
          v-if="$route.name === 'home'"
          @click="$router.push({ name: 'settings' })"
          class="button"
      >
        <Gear />
      </div>
      <div
          v-else
          @click="$router.push({ name: 'home' })"
          class="button"
      >
        <House/>
      </div>
    </div>
    <div class="right-bar">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/global";

.main {
  display: flex;
}

.left-bar {
  flex: 0 0 auto;
  height: 100vh;
  width: 64px;
  background: $main-color;

  .button {
    width: 48px;
    height: 48px;
    margin: 8px;
    padding: 8px;
    border-radius: 8px;
    fill: #fff;

    &:hover {
      background: rgba(255, 255, 255, .2);
    }
  }
}

.right-bar {
  height: 100vh;
  flex: 1 0 auto;
}
</style>
