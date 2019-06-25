/* eslint-disable no-console */
const Navegador = require('../libs/browser.js')

const home = {
  init: () => {
    const browser = new Navegador()

    if (browser.is('tablet')) {
      console.log('Es Android Tablet')
    }

    if (browser.is('chrome')) {
      console.log('Es Chrome')
    }

    if (browser.is('firefox')) {
      console.log('Es Firefox')
    }

    console.log('welcome to common/index')
  },
}

export default home
