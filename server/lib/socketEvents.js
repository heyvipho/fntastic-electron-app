import {getUserInfo, getRooms, moveUser, kickUser, addSocket, removeSocket} from "./rooms.js";

const onConnection = socket => {
    socket.emit('rooms', getRooms())

    socket.on("login", ({ login }) => {
        addSocket(socket.id, login)
        socket.emit('user-info', getUserInfo({login}))
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
