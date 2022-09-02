import Router from '@koa/router'
import koaBody from 'koa-body'

class ResponseError {
    constructor(decription) {
        this.decription = decription || null
    }
}

class Response {
    constructor(data, error) {
        this.data = data || null
        this.error = error || null
    }
}

const router = new Router()

// router.get('/users/:id', (ctx) => {
//     const id = +ctx.params.id
//
//     if (Number.isNaN(id)) {
//         ctx.status = 400
//         ctx.body = new Response(null, new ResponseError("id is not a number"))
//         return
//     }
//
//     ctx.body = new Response([
//         {
//             id,
//             nickname: "NICK",
//         },
//     ], null)
// })
//
// router.get('/users', (ctx) => {
//     ctx.body = new Response([
//         {
//             id: 0,
//             nickname: "NICK",
//         },
//     ], null)
// })
//
// router.post('/users', koaBody(), (ctx) => {
//     const { nickname } = ctx.request.body
//
//     if (typeof nickname !== 'string') {
//         ctx.status = 400
//         ctx.body = new Response(null, new ResponseError("nickname is not a string"))
//         return
//     }
//
//     if (nickname.length === 0) {
//         ctx.status = 400
//         ctx.body = new Response(null, new ResponseError("nickname has zero length"))
//         return
//     }
//
//     ctx.status = 201
//     ctx.body = new Response([
//         {
//             id: 999,
//             nickname,
//         },
//     ], null)
// })
//
// router.delete('/users/:id', (ctx) => {
//     const id = +ctx.params.id
//
//     if (Number.isNaN(id)) {
//         ctx.status = 400
//         ctx.body = new Response(null, new ResponseError("id is not a number"))
//         return
//     }
//
//     ctx.body = new Response([
//         {
//             id,
//         },
//     ], null)
// })

export default router
