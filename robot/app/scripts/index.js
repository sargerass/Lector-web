// required for livereload to work (*.pug files, this is trimmed in prod)
/* eslint-disable import/first, global-require */
/*
if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}
*/

//import '../styles/main.scss'
//import '../styles/styles.scss'
/* sintaxis import y require, es mejor usar de un solo tipo */
/* esta es la forma sugerida para el startup de root (/) */
//var $;
// eslint-disable-next-line import/extensions
import LoadData from './robots/LoadData.js';

;(function() {
	// Load the script
  const script = document.createElement('SCRIPT')
  script.src =
    'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'
  script.type = 'text/javascript'
  script.onload = function() {
    var $ = window.jQuery
    const datosPagina = new LoadData()
    datosPagina.render()
	};
  document.getElementsByTagName('head')[0].appendChild(script);
})();