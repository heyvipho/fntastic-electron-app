import http from 'http'
import Koa from 'koa'
import router from './lib/router.js'
import { Server } from 'socket.io'
import { onConnection } from "./lib/socket.js";

const app = new Koa()
app.use(router.routes())
app.use(router.allowedMethods())

const server = http.createServer(app.callback())

const io = new Server(server, {
    serveClient: false,
})
io.on('connection', onConnection)

server.listen(3000)
