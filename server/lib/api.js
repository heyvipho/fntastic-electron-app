import Koa from "koa";
import http from "http";
import {Server} from "socket.io";
import router from "./router.js";
import {onConnection} from "./socketEvents.js";

const app = new Koa()
app.use(router.routes())
app.use(router.allowedMethods())

const server = http.createServer(app.callback())

const io = new Server(server, {
  serveClient: false,
})

io.on('connection', onConnection)

export {server, io}
