import { io } from 'socket.io-client'
import toast from '@/utils/toast'
import {ipc} from "@/utils/ipc";
import store from "@/store";

let socket = null

const connect = async () => {
  if (socket != null) {
    socket.disconnect()
  }

  const { address } = await ipc.getServerAddress()

  socket = io(`ws://${address}`)

  socket.on("connect", async () => {
    console.log(socket.id)

    store.commit('main/setConnected', true)

    const { userLogin: login } = await ipc.getUserLogin()
    socket.emit('login', {login})

    toast.info('You was connected successfully')
  })

  socket.on('rooms', rooms => {
    store.commit('rooms/setRooms', rooms)
  })

  socket.on('your-room', room => {
    store.commit('rooms/setYourRoom', room)
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

  return socket
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
