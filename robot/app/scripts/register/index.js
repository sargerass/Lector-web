require('jquery-validation')
require('jquery.alphanum')
const validateFormRegister = require('../libs/validateFormRegister')

function init() {
  /* Filtrado de caracteres numéricos */
  $('#mobile, #dni, #day_born, #month_born, #year_born').numeric()

  /* Filtrado de caracteres alpha */
  $('#name, #lastname_mother, #lastname_father').alpha({
    allowSpace: ' ',
  })

  /* Validacion del formulario Registro */
  $('#register-form').validate(validateFormRegister)

  /* Configuración para enviar el Token CSRF por AJAX */
  function getCookie(name) {
    let cookieValue = null
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';')
      for (let i = 0; i < cookies.length; i++) {
        const cookie = jQuery.trim(cookies[i])
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === `${name}=`) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
          break
        }
      }
    }
    return cookieValue
  }

  const csrftoken = getCookie('csrftoken')

  function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return /^(GET|HEAD|OPTIONS|TRACE)$/.test(method)
  }

  /* Eventos Submit del Register */
  $('#btn_register').on('click', e => {
    e.preventDefault()
    const self = $(e.currentTarget)
    const form = self.closests('form')
    self.prop('disabled', 'disabled')

    if ($('#register-form').valid()) {
      self.removeProp('disabled')

      /* AJAX POST */
      $.ajax({
        type: 'POST',
        url: '/register/process/', // the url where we want to POST
        data: form.serializeObject(), // our data object
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',

        beforeSend(xhr, settings) {
          if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader('X-CSRFToken', csrftoken)
          }
        },

        error(a1, a2) {
          /* eslint-disable-next-line no-console */
          console.log(`Server request error : ${a1} | ${a2}`)
        },

        success(data) {
          return data
        },
      })
    } else {
      self.removeProp('disabled')
    }
  })
  /* eslint-disable-next-line no-console */
  console.log('welcome to register/index')
}

module.exports = {
  init,
}
