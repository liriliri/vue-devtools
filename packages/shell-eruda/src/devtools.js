import { initDevTools } from '@front'
import { Bridge } from '@vue-devtools/shared-utils'

const targetWindow = window.parent

initDevTools({
  connect(cb) {
    cb(
      new Bridge({
        listen(fn) {
          window.addEventListener('message', (evt) => {
            fn(evt.data)
          })
        },
        send(data) {
          targetWindow.postMessage(data, '*')
        },
      })
    )
  },
  onReload: () => {},
})
