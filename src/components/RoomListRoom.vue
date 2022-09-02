<script>
import VolumeHigh from "@/components/icons/VolumeHigh.vue";
export default {
  name: 'RoomListRoom',
  components: {VolumeHigh},
  props: {
    room: {
      type: Object,
      required: true,
    }
  },
  emits: [
      'titleClick',
  ],
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
}
</script>

<template>
<div class="room">
  <div
      class="title"
      @click="$emit('titleClick', room.id)"
  >
    <div class="icon">
      <VolumeHigh></VolumeHigh>
    </div>
    <div class="text">
      {{ room.title }}
    </div>
  </div>

  <ul class="user-list">
    <li
        v-for="user in room.users"
        class="item"
    >
      {{ user.nickname }}
    </li>
  </ul>
</div>
</template>

<style lang="scss" scoped>
@import "@/style/global";

%room-item {
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 16px;
  font-size: 12px;
  font-weight: 500;
}

.room {
  padding: 8px;

  .title {
    cursor: default;
    user-select: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 8px;

    .icon {
      flex: 0 0 auto;
      fill: #fff;
      width: 16px;
      margin-right: 8px;

      svg {
        display: block;
      }
    }

    .text {
      flex: 1 1 auto;
      text-transform: uppercase;

      @extend %room-item;
    }

    @extend %button-hover;
  }
}

.user-list {
  list-style: none;
  margin: 0;
  padding: 0 0 0 24px;

  .item {
    display: block;
    padding: 8px;

    @extend %room-item;
  }
}
</style>
