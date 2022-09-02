const ipc = {
  setServerAddress(address) {
    return window.electron.setServerAddress(address)
  },
  getServerAddress() {
    return window.electron.getServerAddress()
  },

  setUserLogin(userLogin) {
    return window.electron.setUserLogin(userLogin)
  },
  getUserLogin() {
    return window.electron.getUserLogin()
  },
}

export {ipc}
