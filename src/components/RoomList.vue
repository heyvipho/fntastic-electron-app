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
    leave() {
      const userID = 0

      this.$store.dispatch('rooms/kickUser', {
        userID,
      })
    },
  },
}
</script>

<template>
  <div class="room-bar">
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

    <div class="status">
      <div class="room-current">
        <div class="title">Комнатаadfasdfasdfsafadf</div>
        <button
            @click="leave()"
            class="button"
        >
          Leave
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/global";

$status-height: 64px;
$status-color: #1C202C;

.room-bar {
  height: 100vh;
  width: 200px;
  background: $second-color;
  display: flex;
  flex-direction: column;
}

.room-list {
  width: 200px;
  overflow-y: auto;
  flex: 1 1 auto;

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

.status {
  flex: 0 0 auto;
  height: $status-height;
  width: 200px;
  background: $status-color;
}

.room-current {
  height: $status-height;
  width: 200px;
  display: flex;
  align-items: center;

  .title {
    flex: 1 1 auto;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    color: #fff;
    margin: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .button {
    flex: 0 0 auto;
    background: rgba(255, 255, 255, .2);
    outline: none;
    border: none;
    color: white;
    height: 32px;
    border-radius: 8px;
    padding: 0 12px;
    margin-right: 16px;

    &:active {
      background: rgba(255, 255, 255, .1);
    }
  }
}
</style>
