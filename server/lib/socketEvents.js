import {getRooms, moveUser, kickUser, addSocket, removeSocket} from "./rooms.js";

const onConnection = socket => {
    console.log('a user connected');
    console.log(socket.id)

    socket.emit('rooms', getRooms())

    socket.on("login", ({ login }) => {
        addSocket(socket.id, login)
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
