const store = require('./store')

const {ipcMain} = require('electron')

const initIPCListeners = () => {
  ipcMain.handle('set-server-address', (event, payload) => {
    store.setServerAddress(payload.address)
  })
  ipcMain.handle('get-server-address', (event, payload) => {
    return {
      address: store.getServerAddress(),
    }
  })

  ipcMain.handle('set-user-login', (event, payload) => {
    store.setUserLogin(payload.userLogin)
  })
  ipcMain.handle('get-user-login', (event, payload) => {
    return {
      userLogin: store.getUserLogin(),
    }
  })
}

module.exports = {initIPCListeners}
