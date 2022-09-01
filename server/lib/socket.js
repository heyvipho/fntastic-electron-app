const onConnection = socket => {
    console.log('a user connected');
    console.log(socket.id)

    socket.on("disconnect", (reason) => {
        console.log('a user disconnected');
        console.log(socket.id)
    });
}

export { onConnection }
