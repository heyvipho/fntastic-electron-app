<script>
import RoomListRoom from "@/components/RoomListRoom.vue";

export default {
  name: 'RoomList',
  components: {
    RoomListRoom,
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
  <div class="room-list">
    <RoomListRoom
        :room="{}"
    ></RoomListRoom>
    <RoomListRoom
        :room="{}"
    ></RoomListRoom>
    <RoomListRoom
        :room="{}"
    ></RoomListRoom>
    <RoomListRoom
        :room="{}"
    ></RoomListRoom>
    <RoomListRoom
        :room="{}"
    ></RoomListRoom>
    <RoomListRoom
        :room="{}"
    ></RoomListRoom>
    <RoomListRoom
        :room="{}"
    ></RoomListRoom>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/global";

.room-list {
  height: 100vh;
  width: 200px;
  background: $second-color;
  overflow-y: auto;
}
</style>
