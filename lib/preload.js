// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'electron',
  {
    setServerAddress: (address) => {
      ipcRenderer.send('set-server-address', {address})
    },
    getServerAddress: () => ipcRenderer.invoke('get-server-address', {}),

    setUserLogin: (userLogin) => {
      ipcRenderer.send('set-user-login', {userLogin})
    },
    getUserLogin: () => ipcRenderer.invoke('get-user-login', {}),
  }
)
