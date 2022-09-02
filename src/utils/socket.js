import { io } from 'socket.io-client'
import toast from '@/utils/toast'
import {ipc} from "@/utils/ipc";
import store from "@/store";

let socket = null

const connect = async () => {
  if (socket != null) {
    socket.disconnect()
  }

  store.dispatch('main/reset')

  const { address } = await ipc.getServerAddress()

  socket = io(`ws://${address}`)

  socket.on("connect", async () => {
    store.commit('main/setConnected', true)

    const { userLogin: login } = await ipc.getUserLogin()
    socket.emit('login', {login})

    toast.info('You were connected successfully')
  })

  socket.on('rooms', rooms => {
    store.commit('rooms/setRooms', rooms)
  })

  socket.on('user-info', info => {
    store.commit('users/setInfo', info)
  })

  socket.on("disconnect", () => {
    store.commit('main/setConnected', false)
  });

  socket.on('server-error', ({ description }) => {
    toast.error(description)
  })

  socket.on("connect_error", () => {
    toast.error("Error was occurred while connecting to the server")
    socket.disconnect()
  });
}

const emitter = {
  moveUser({ login, roomID }) {
    socket.emit('move-user', { login, roomID })
  },
  kickUser({ login }) {
    socket.emit('kick-user', { login })
  },
}

export {connect, emitter}
