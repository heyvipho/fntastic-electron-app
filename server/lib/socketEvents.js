import {getUserInfo, getRooms, moveUser, kickUser, addSocket, removeSocket, getRoomInfo} from "./rooms.js";

const onConnection = socket => {
    socket.emit('rooms', getRooms())

    socket.on("login", ({ login }) => {
        const info = getUserInfo({login})
        if (info) {
            addSocket(socket.id, login)
            socket.emit('user-info', info)
            socket.emit('room-info', getRoomInfo({login}))
        } else {
            onError('No such login')
            socket.disconnect()
        }
    })
    socket.on("disconnect", () => {
        removeSocket(socket.id)
    })

    const onError = description => {
        socket.emit('server-error', {description})
    }

    socket.on('move-user', ({ login, roomID }) => moveUser({ login, roomID, onError }))
    socket.on('kick-user', ({ login }) => kickUser({ login, onError }))
}

export { onConnection }
