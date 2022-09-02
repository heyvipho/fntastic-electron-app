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

  socket.on("connect", () => {
    console.log(socket.id)

    store.commit('main/setConnected', true)
    toast.info('You was connected successfully')
  })

  socket.on("disconnect", () => {
    store.commit('main/setConnected', false)
  });

  socket.on("connect_error", () => {
    toast.info("Error was occurred while connecting to the server")
    socket.disconnect()
  });

  return socket
}

export {connect}
