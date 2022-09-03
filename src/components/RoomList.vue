<script>
import RoomListRoom from "@/components/RoomListRoom.vue";
import {ipc} from "@/utils/ipc";
import {emitter} from "@/utils/socket";

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
  computed: {
    rooms() {
      return this.$store.state.rooms.rooms
    },
    roomInfo() {
      return this.$store.state.rooms.info
    },
    userInfo() {
      return this.$store.state.users.info
    },
  },
  methods: {
    async moveSelf(roomID) {
      const login = await this.getUserLogin()
      emitter.moveUser({login, roomID})
    },
    async leave() {
      const login = await this.getUserLogin()
      emitter.kickUser({login})
    },
    async getUserLogin() {
      const { userLogin } = await ipc.getUserLogin()
      return userLogin
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
      <div
          v-if="roomInfo !== null"
          class="room-current"
      >
        <div class="box">
          <div class="title">{{ roomInfo.title }}</div>
          <div v-if="userInfo" class="login">{{ userInfo.login }}</div>
        </div>
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

$width: 250px;

$status-height: 64px;
$status-color: #1C202C;

.room-bar {
  height: 100vh;
  width: $width;
  background: $second-color;
  display: flex;
  flex-direction: column;
}

.room-list {
  width: $width;
  overflow-y: auto;
  flex: 1 1 auto;

  .stub {
    %common {
      height: 16px;
      background: rgba(255, 255, 255, .05);
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
  width: $width;
  background: $status-color;
}

.room-current {
  height: $status-height;
  width: $width;
  display: flex;
  align-items: center;

  .box {
    flex: 1 1 auto;
    margin: 16px;

    .title {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 500;
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 4px;
    }

    .login {
      font-size: 8px;
      font-weight: 500;
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
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
