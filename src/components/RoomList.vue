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
    return {
      rooms: [
        {
          id: 0,
          title: 'Room Title',
          users: [
            {
              id: 0,
              nickname: 'nickame123',
            },
          ],
        },
        {
          id: 1,
          title: 'Room Title',
          users: [],
        },
        {
          id: 2,
          title: 'Room Title',
          users: [
            {
              id: 0,
              nickname: 'nickame123',
            },
          ],
        },
      ],
    }
  },
  watch: {},
  computed: {},
  methods: {
    moveSelf(roomID) {
      const userID = 0

      this.$store.dispatch('rooms/moveUser', {
        userID,
        roomID,
      })
    },
  },
}
</script>

<template>
  <div class="room-list">
    <div
        v-if="rooms.length === 0"
        class="stub"
    >
      <div class="title"></div>
      <div class="user"></div>
      <div class="user"></div>
      <div class="title"></div>
      <div class="user"></div>
      <div class="user"></div>
    </div>
    <RoomListRoom
        v-else
        v-for="room in rooms"
        :room="room"
        @titleClick="moveSelf($event)"
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

  .stub {
    %common {
      height: 16px;
      background: rgba(255, 255, 255, .1);
      margin: 8px;
    }

    //.wrapper {
    //  padding: 8px;
    //}

    .title {

      @extend %common;
    }

    .user {
      margin-left: 32px;

      @extend %common;
    }
  }
}
</style>
