import {io} from './api.js'
import db from "./db.js";

const users = new Map()

const sockets = new Map()

const roomIDs = []
const rooms = new Map()

const init = async () => {
  const dbUsers = await db.getUsers()
  dbUsers.forEach(({login}) => {
    users.set(login, {
      roomID: null,
    })
  })

  const dbRooms = await db.getRooms()
  dbRooms.forEach(({id, title}) => {
    roomIDs.push(id)
    rooms.set(id, {
      title,
      users: new Set(),
    })
  })
}

init()

const addSocket = (id, login) => {
  sockets.set(id, {login})
}

const removeSocket = (id) => {
  sockets.delete(id)
}

const getUserInfo = ({login}) => {
  const user = users.get(login)
  if (!user) {
    return null
  }
  return {
    login,
  }
}

const getRoomInfo = ({login}) => {
  const user = users.get(login)
  if (!user) {
    return null
  }
  if (user.roomID === null) {
    return null
  }
  const room = rooms.get(user.roomID)
  if (!room) {
    return null
  }

  const roomUsers = []
  room.users.forEach(login => {
    roomUsers.push({
      login,
    })
  })

  return {
    id: user.roomID,
    title: room.title,
    users: roomUsers,
  }
}

const getRooms = () => {
  return roomIDs.map(id => {
    const room = rooms.get(id)

    const users = []
    room.users.forEach(login => {
      users.push({
        login,
      })
    })

    return {
      id,
      title: room.title,
      users,
    }
  })
}

const kickUser = ({
                    login,
                    withoutUpdates = false,
                    onError = () => {}
}) => {
  const user = users.get(login)

  if (!user) {
    onError('No such user')
    return
  }

  if (user.roomID === null) {
    return
  }

  const room = rooms.get(user.roomID)

  if (!room) {
    user.roomID = null
    return
  }

  room.users.delete(login)

  user.roomID = null

  withoutUpdates || sendUpdates()
}

const moveUser = ({login, roomID, onError = () => {}}) => {
  let user = users.get(login)

  if (!user) {
    onError('No such user')
    return
  }

  if (user.roomID !== null) {
    if (user.roomID === roomID) {
      return
    }
  }

  const room = rooms.get(roomID)

  if (!room) {
    return
  }

  kickUser({login, withoutUpdates: true})

  users.get(login).roomID = roomID

  room.users.add(login)

  sendUpdates()
}

const sendUpdates = () => {
  sockets.forEach(({login}, socketID) => {
    io.to(socketID).emit('rooms', getRooms())
    io.to(socketID).emit('room-info', getRoomInfo({login}))
  })
}

export {getUserInfo, getRooms, moveUser, kickUser, addSocket, removeSocket}
