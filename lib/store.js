const Store = require('electron-store')
const path = require("path");

const esp = process.env.NODE_ENV !== 'production' && process.env.ELECTRON_STORE_PATH && path.join(__dirname, '..', process.env.ELECTRON_STORE_PATH)

const store = new Store({
  cwd: esp || null,
  defaults: {
    "server-address": "127.0.0.1:3000",
    "user-login": "example",
  },
})

module.exports = {
  getServerAddress: () => store.get('server-address'),
  setServerAddress: value => store.set('server-address', value),

  getUserLogin: () => store.get('user-login'),
  setUserLogin: value => store.set('user-login', value),
}
