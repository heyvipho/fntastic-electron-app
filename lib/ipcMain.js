const store = require('./store')

const {ipcMain} = require('electron')

const initIPCListeners = () => {
  ipcMain.on('set-server-address', (event, payload) => {
    store.set('server-address', payload.address)
  })
  ipcMain.handle('get-server-address', (event, payload) => {
    return {
      address: store.get('server-address'),
    }
  })

  ipcMain.on('set-user-login', (event, payload) => {
    store.set('user-login', payload.userLogin)
  })
  ipcMain.handle('get-user-login', (event, payload) => {
    return {
      userLogin: store.get('user-login'),
    }
  })
}

module.exports = {initIPCListeners}
