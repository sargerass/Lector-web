/**
 * AutoFocus module cambia el foco (focus) de un campo a otro, despues de
 * teclear en un campo. El modulo esta hecho especialmente para el login de
 * submiller
 * @modulo libs/autofocus
 *
 * @param {String} idInputDay     Id del campo día
 * @param {String} idInputMonth   Id del campo mes
 * @param {String} idInputYear    Id del campo año
 * @param {String} idInputDNI     Id del campo DNI
 * @constructor
 */
function setupAutoFocus(idInputDay, idInputMonth, idInputYear, idInputDNI) {
  function saltoInput() {
    const campoActual = this.id
    const numDigitos = this.value.length
    const charCode = this.which ? this.which : this.keyCode
    let nextInput
    if (
      !(charCode > 31 && (charCode < 48 || charCode > 57)) &&
      campoActual !== idInputYear
    ) {
      if (numDigitos === 2 && campoActual !== idInputDNI) {
        if (campoActual === idInputDay) nextInput = idInputMonth
        else if (campoActual === idInputMonth) nextInput = idInputYear
        else if (campoActual === idInputYear) nextInput = idInputDNI

        setTimeout(() => {
          document.getElementById(nextInput).focus()
        }, 10)
      }
    } else if (numDigitos === 4 && campoActual !== idInputDNI) {
      if (campoActual === idInputDay) nextInput = idInputMonth
      else if (campoActual === idInputMonth) nextInput = idInputYear
      else if (campoActual === idInputYear) nextInput = idInputDNI

      setTimeout(() => {
        document.getElementById(nextInput).focus()
      }, 10)
    }
  }

  ;[idInputDay, idInputMonth, idInputYear, idInputDNI].forEach(input => {
    document.getElementById(input).onkeyup = saltoInput
  })
}

module.exports = setupAutoFocus
