<script>
import WrapperMain from "@/components/WrapperMain.vue";
import SettingsServerAddress from "@/components/SettingsServerAddress.vue"
import SettingsUser from "@/components/SettingsUser.vue";

export default {
  name: 'SettingsView',
  components: {SettingsUser, SettingsServerAddress, WrapperMain},
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
    <div class="item">
      <div class="title">
        Server Address
      </div>
      <div class="content">
        <SettingsServerAddress></SettingsServerAddress>
      </div>
    </div>
    <div class="item">
      <div class="title">
        User Login
      </div>
      <div class="content">
        <SettingsUser></SettingsUser>
      </div>
    </div>
  </WrapperMain>
</template>

<style lang="scss" scoped>
@import "@/style/global";

.item {
  margin: 16px;

  .title {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 8px;
  }

  .content {
  }
}
</style>
