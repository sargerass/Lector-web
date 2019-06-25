// required for livereload to work (*.pug files, this is trimmed in prod)
/* eslint-disable import/first, global-require */
if (process.env.NODE_ENV !== 'production') {
  require('../login.pug')
}
import '../styles/main.scss'
/* esta es la forma sugerida para el startup de (/login) */
import common from './common'
import login from './login/'

$(document).ready(() => {
  /* eslint-disable no-console */
  console.log('mensaje dentro de document ready para login js')
  ;[common, login].map(module => module.init())
})
