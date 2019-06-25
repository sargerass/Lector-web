require('jquery-validation')
require('jquery.alphanum')
const validateFormLogin = require('../libs/validateFormLogin')
const setupAutofocus = require('../libs/autoFocus.js')

function init() {
  /* Invocar Autofocus */
  setupAutofocus('day_born', 'month_born', 'year_born', 'dni')

  /* Autocompleta ceros en campos del login */
  $('#day_born, #month_born').focusout(e => {
    const field = $(e.currentTarget)
    const value = parseInt(field.val(), 10)

    if (value < 10 && field.val().length === 1) {
      field.val(`0${field.val()}`)
    }
  })

  /* Filtro numérico para los campos del login */
  $('#login-form .login-form__field input').numeric({
    allowDecSep: false,
    allowMinus: false,
  })

  /* Validación del formulario Login */
  const loginValidate = $('#login-form').validate(validateFormLogin)

  /* Validación para la fecha de nacimiento */
  $('#dni').on('focus', () => {
    $('#birth_date').val(
      [
        $('#year_born').val(),
        $('#month_born').val(),
        $('#day_born').val(),
      ].join('-')
    )
  })

  loginValidate.element('input[name="birth_date"]')

  /* Eventos Submit del Login */
  $('#btn-login').on('click', e => {
    e.preventDefault()

    const self = $(e.currentTarget)
    self.prop('disabled', 'disabled')

    $('#birth_date').val(
      [
        $('#year_born').val(),
        $('#month_born').val(),
        $('#day_born').val(),
      ].join('-')
    )

    if ($('#login__form').valid()) {
      self.removeProp('disabled')
      $('#login__form').submit()
    } else {
      self.removeProp('disabled')
    }
  })
  /* eslint-disable-next-line no-console */
  console.log('welcome to login/index')
}

module.exports = { init }
