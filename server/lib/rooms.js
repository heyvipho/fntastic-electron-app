import {io} from './api.js'

const users = new Map()

const sockets = new Map()

const roomIDs = []
const rooms = new Map()

users.set('example', {
  roomID: null,
})

roomIDs.push(0, 2)
rooms.set(0, {
  title: 'Room Title',
  users: new Set(),
})
rooms.set(1, {
  title: 'Room Title 2',
  users: new Set(),
})
rooms.set(2, {
  title: 'Room Title 3',
  users: new Set(),
})
rooms.set(3, {
  title: 'Room Title 4',
  users: new Set(),
})

const addSocket = (id, login) => {
  sockets.set(id, {login})
}

const removeSocket = (id) => {
  sockets.delete(id)
}

const getRooms = () => {
  return roomIDs.map(id => {
    const room = rooms.get(id)

    const users = []
    room.users.forEach(nickname => {
      users.push({
        nickname: nickname,
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

    const user = users.get(login)
    if (!user) {
      return
    }
    if (user.roomID === null) {
      io.to(socketID).emit('your-room', null)
      return
    }
    const room = rooms.get(user.roomID)
    if (!room) {
      return
    }

    const roomUsers = []
    room.users.forEach(nickname => {
      roomUsers.push({
        nickname: nickname,
      })
    })

    io.to(socketID).emit('your-room', {
      id: user.roomID,
      title: room.title,
      users: roomUsers,
    })
  })
}

export {getRooms, moveUser, kickUser, addSocket, removeSocket}
