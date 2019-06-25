// required for livereload to work (*.pug files, this is trimmed in prod)
/* eslint-disable import/first, global-require */
if (process.env.NODE_ENV !== 'production') {
  require('../register.pug')
}

import '../styles/main.scss'
import '../styles/styles.scss'
/* esta es la forma sugerida para el startup de (/register) */
import common from './common'
import register from './register/'

$(document).ready(() => {
  /* eslint-disable-next-line no-console */
  console.log('mensaje dentro de document ready para register js')
  ;[common, register].map(module => module.init())
})
