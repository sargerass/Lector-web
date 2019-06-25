/**
 * Validador de navegador y versión
 * @modulo libs/browser
 */
function Browser() {
  this.os = {}
  this.userAgent = navigator.userAgent
  this.os.webkit = !!this.userAgent.match(/WebKit\/([\d.]+)/)
  this.os.android = !!this.userAgent.match(/(Android)\s+([\d.]+)/)
  this.os.mobile = !!(this.os.android && this.userAgent.match(/Mobile/i))
  this.os.tablet = !!(this.os.android && !this.userAgent.match(/Mobile/i))
  this.os.ipad = !!this.userAgent.match(/(iPad).*OS\s([\d_]+)/)
  this.os.iphone = !!(
    !this.os.ipad && this.userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
  )
  this.os.ios8 = !!(
    (this.os.ipad || this.os.iphone) &&
    this.userAgent.match(/8_/)
  )
  this.os.ios = this.os.ipad || this.os.iphone
  this.os.wp = !!this.userAgent.match(/Windows Phone/i)
  this.os.chrome = !!this.userAgent.match(/Chrome/i)
  this.os.firefox = !!this.userAgent.match(/Gecko/i)
  this.os.opera = !!this.userAgent.match(/Opera/)
  this.os.ie11 = !!(
    this.userAgent.match(/MSIE 11.0/i) || this.userAgent.match(/Trident\/7/i)
  )
  this.os.ie10 = !!(
    this.userAgent.match(/MSIE 10.0/i) || this.userAgent.match(/Trident\/6/i)
  )
  this.os.ie9 = !!(
    this.userAgent.match(/MSIE 9.0/i) || this.userAgent.match(/Trident\/5/i)
  )
  this.os.ie8 = !!(
    this.userAgent.match(/MSIE 8.0/i) || this.userAgent.match(/Trident\/4/i)
  )
  this.os.ie = this.os.ie9 || this.os.ie10 || this.os.ie11
}

/**
 * Verifica el navegador y su versión según el parámetro browser
 *
 * @method  is
 * @param   {String}   browser   Tipo de navegador
 * @returns {Boolean}
 */
Browser.prototype.is = function is(browser) {
  return this.os[browser]
}

module.exports = Browser
