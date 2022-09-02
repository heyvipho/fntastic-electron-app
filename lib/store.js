const Store = require('electron-store')

const store = new Store({
  defaults: {
    "server-address": "127.0.0.1:3000",
    "user-login": "example",
  },
})

module.exports = store
