// required for livereload to work (*.pug files, this is trimmed in prod)
/* eslint-disable import/first, global-require */
if (process.env.NODE_ENV !== 'production') {
  require('../about.pug')
}

import '../styles/main.scss'
import '../styles/sass/components/search_bar.scss'
/* esta es la forma sugerida para el startup de (/about) */
import common from './common'
import about from './about/'

/* eslint-disable-next-line no-console */
console.log('este es la pagina about')
$(document).ready(() => {
  /* eslint-disable-next-line no-console */
  console.log('mensaje dentro de document ready para about js')
  ;[common, about].map(module => module.init())
})
